import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { OffreService } from '../../services/offre.service';
import { Offre } from '../../models/offre';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';
import { SearchHistory } from 'src/app/models/SearchHistory';
import { query } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';

enum ExperienceLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

enum ContratType {
  CDI = 'CDI',
  CDD = 'CDD',
  Stage = 'Stage',
  Freelance = 'Freelance',
}

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css'],
})
export class OfferCardComponent implements OnInit {
  offreForm!: FormGroup;
  offres: Offre[] = [];
  filteredOffres: Offre[] = []; // Ajout du tableau pour les offres filtrées
  searchHistory: SearchHistory[] = [];
  experienceLevels = Object.values(ExperienceLevel);
  contratTypes = Object.values(ContratType);
  
  searchQuery: string = ''; // Variable de recherche combinée pour titre et localisation
  enterPressed: boolean = false;
  showConfirmation: boolean = false;
  

  constructor(
    private offreService: OffreService, 
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef ,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadOffres();
    this.loadSearchHistory();
    this.offreForm = this.fb.group({
      reference: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
      deadline: ['', [Validators.required]],
      contratType: ['', [Validators.required]],
      skills: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      experienceLevel: ['', [Validators.required]],
    });
  }

  addItem(): void {
    if (this.offreForm.invalid) {
        this.snackBar.open('Please fill in all required fields', 'Close');
        return;
    }
    this.offreService.addOffre(this.offreForm.value).subscribe({
        next: (res: any) => {
            if (res.reference) {
                this.snackBar.open('Offer added successfully', 'Close', {
                    duration: 5000,
                });
                this.offreForm.reset();
                this.loadOffres();
            } else {
                this.snackBar.open('An error occurred. Please try again', 'Close', {
                    duration: 5000,
                });
            }
        },
        error: (error: any) => {
            console.error('Erreur lors de l\'ajout de l\'offre:', error);
            this.snackBar.open('Error adding offer', 'Close', {
                duration: 5000,
            });
        },
    });
}

loadOffres() {
  this.offreService.getAllOffres().subscribe({
      next: (data) => {
          this.offres = data;
          this.sortOffersByRating(); // Sort offers by rating after loading
          this.filteredOffres = [...this.offres]; // Initialize filtered offers on load
      },
      error: (error) => {
          console.log('Error Loading Offers:', error);
      },
  });
}


  showDetails(offre: Offre) {
    const navigationExtras: NavigationExtras = {
      state: {
        offre: offre,
      },
    };
    this.router.navigate(['/detailoffer', offre.reference], navigationExtras);
  }

  cancelAdd(): void {
    window.location.href = '/offercard';
  }
  navigateToFavorites() {
    this.router.navigateByUrl('/favorites');
  }
  exportToExcel(): void {
    const data: any[] = [];
    this.offres.forEach(offre => {
      const { reference, title, location, description, deadline, contratType, skills, experienceLevel } = offre;
      data.push([reference, title, location, description, deadline, contratType, skills, experienceLevel]);
    });

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet([['Reference', 'Title', 'Location', 'Description', 'Deadline', 'Contract Type', 'Skills', 'Experience Level'], ...data]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Offers');
    XLSX.writeFile(wb, 'offers.xlsx');
  }

  loadSearchHistory() {
    this.offreService.getAllSearchHistory().subscribe({
      next: (data) => {
        this.searchHistory = data;
      },
      error: (error) => {
        console.error('Error Loading Search History:', error);
      },
    });
  }

  filterOffres() {
    if (this.isQueryMeaningful(this.searchQuery)) {
      this.filteredOffres = this.offres.filter((offre) =>
        offre.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        offre.location.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      
      this.sortOffersByRating(); // Sort filtered offers by rating
    } else {
      this.filteredOffres = [...this.offres];
      this.sortOffersByRating(); // Sort all offers by rating
    }
  }
  sortOffersByRating() {
    // Sort offers by rating in descending order
    this.filteredOffres = [...this.offres].sort((a, b) => b.rating - a.rating);
  }
  
   saveSearchQueryToHistory(searchHistoryItem: SearchHistory) {
    // Check if the query already exists in the search history
    if (!this.searchHistory.some((history) => history.searchQuery === searchHistoryItem.searchQuery)) {
      // If not, add it to the search history
      this.offreService.saveSearchHistory(searchHistoryItem).subscribe({
        next: (data) => {
          // Reload search history after adding the new query
          this.loadSearchHistory();
        },
        error: (error) => {
          console.log('Error saving search query to history:', error);
        },
      });
    }
  }
  
  // Modify the handleKeyPress() method to handle the search query
handleKeyPress(query: string) {
  if (this.isQueryMeaningful(query)) {
    const searchHistoryItem: SearchHistory = {
      searchQuery: query,
      searchDate: new Date(),
    };
    this.searchQuery = query; // Update searchQuery value
    this.filterOffres(); // Call filterOffres() whenever search query changes
    this.saveSearchQueryToHistory(searchHistoryItem);
  }
}

  resetEnterPressed() {
    this.enterPressed = false;
  }

  isQueryMeaningful(query: string): boolean {
    return query.trim().length > 0;
  }

 // Modify the onSearchQueryChange() method to call filterOffres() directly
onSearchQueryChange(): void {
  if (this.isQueryMeaningful(this.searchQuery)) {
    this.filterOffres(); // Call filterOffres() whenever searchQuery changes
  } else {
    this.loadOffres(); // Reload all offers when search query is empty
  }
}
 /* deleteAllSearchHistoryConfirmed(searchQuery?: string) {
    if (searchQuery) {
      // Perform deletion based on searchQuery if needed
      // For now, let's leave it empty as we want to delete all search history
    } else {
      // If no searchQuery is provided, delete all search history
      this.offreService.deleteAllSearchHistory().subscribe({
        next: () => {
          // Handle success
          // Clear the search history array
          this.searchHistory = [];
          this.showConfirmation = false; // Close the confirmation dialog
        },
        error: (error: any) => {
          // Handle error
          console.error('Error deleting search history:', error);
          this.showConfirmation = false; // Close the confirmation dialog on error
        }
      });
    }
  }*/
  
  deleteAllSearchHistoryConfirmed() {
    // Perform delete operation here
    this.offreService.deleteAllSearchHistory().subscribe({
      next: () => {
        // Handle success
        // Clear the search history array
        this.searchHistory = [];
        this.showConfirmation = false; // Close the confirmation dialog
      },
      error: (error: any) => {
        // Handle error
        console.error('Error deleting search history:', error);
        this.showConfirmation = false; // Close the confirmation dialog on error
      }
    });
  }
  deleteAllSearchHistory() {
    this.showConfirmation = true;
  }
  
  cancelDelete() {
    this.showConfirmation = false;
  }
  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User clicked Yes, perform delete operation
        this.deleteAllSearchHistoryConfirmed();
      } else {
        // User clicked No or closed the dialog, do nothing
      }
    });
  }
  formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  navigateToOffer(searchQuery: string): void {
    const filteredOffers = this.offres.filter(offre =>
      offre.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      offre.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    if (filteredOffers.length === 0) {
      // Display an alert indicating that no offer exists for the clicked search query
      this.snackBar.open('No offer found for this search query', 'Close', {
        duration: 5000,
      });
    } else {
      // Update filtered offers if offers are found for the clicked search query
      this.filteredOffres = filteredOffers;
    }
  
    // Optionally, you can clear the search query to reset the search input field
    this.searchQuery = '';
  }
  
  
  }
  
  



