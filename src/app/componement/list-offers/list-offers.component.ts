import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-list-offers',
  templateUrl: './list-offers.component.html',
  styleUrls: ['./list-offers.component.css']
})
export class ListOffersComponent {
  offreForm!: FormGroup;
  offres: any[] = [];
  
 

  constructor(
    private offreService: OfferService, 
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void {
    this.loadOffres();

  }

  

  loadOffres() {
    this.offreService.getOffers().subscribe({
      next: (data) => {
        this.offres = data;
      },
      error: (error) => {
        console.log('Erreur lors du chargement des offres:', error);      },
    });
  }

  showDetails(offre: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        offre: offre,
      },
    };
  }
}
