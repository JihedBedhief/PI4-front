import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { OffreService } from '../../services/offre.service';
import { Offre } from '../../models/offre';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  
  experienceLevels = Object.values(ExperienceLevel);
  contratTypes = Object.values(ContratType);

  constructor(
    private offreService: OffreService, 
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef ,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadOffres();
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
      },
      error: (error) => {
        console.log('Erreur lors du chargement des offres:', error);      },
    });
  }

  showDetails(offre: Offre) {
    const navigationExtras: NavigationExtras = {
      state: {
        offre: offre,
      },
    };
    this.router.navigate(['/detailoffer'], navigationExtras);
  }

  cancelAdd(): void {
    window.location.href = '/offercard';
  }
  navigateToFavorites() {
    this.router.navigateByUrl('/favorites');
  }
}
