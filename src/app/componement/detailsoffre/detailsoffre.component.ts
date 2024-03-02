import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.css']
})
export class DetailsoffreComponent implements OnInit {
addToFavorites() {
throw new Error('Method not implemented.');
}
  offre: Offre = {
    reference: '',
    title: '',
    location: '',
    description: '',
    deadline: new Date(),
    contratType: '',
    skills: '',
    experienceLevel: ''
  };  
  reference: any;

  constructor(
    private route: ActivatedRoute,
    private offreService: OffreService,
    private router: Router,
    private dialog: MatDialog,
  ) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.offre = navigation.extras.state['offre'];
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.reference = params.get('reference');
      if (this.reference) {
        this.loadOfferDetails(this.reference);
      }
    });
  }

  loadOfferDetails(reference: string): void {
    this.offreService.getOffre(reference).subscribe(
      (offre: Offre) => {
        this.offre = offre;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de l\'offre : ', error);
      }
    );
  }

  openEditPopup(): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '500px',
      data: { offre: this.offre } // Pass the data here
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        console.log('Edit successfully done.');
        // Handle any actions after the edit is successful
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/offercard'); 
  }

  deleteOffer(reference: string): void {
    this.offreService.deleteOffre(reference).subscribe(
      () => {
        console.log('Offer deleted successfully.');
        this.router.navigateByUrl('/offercard'); // Redirect to offer card page after deletion
      },
      (error) => {
        console.error('Error deleting offer:', error);
      }
    );
  }
  
}
