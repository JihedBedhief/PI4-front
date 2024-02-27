import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../services/offre.service';
import { Offre } from '../../models/offre';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {
  offres: Offre[] = [];

  constructor(private offreService: OffreService, private router: Router) { }

  ngOnInit(): void {
    this.loadOffres();
  }

  loadOffres() {
    this.offreService.getAllOffres().subscribe(
      (data: Offre[]) => {
        this.offres = data;
      },
      (error) => {
        console.log('Erreur lors du chargement des offres : ', error);
      }
    );
  }


  showDetails(offre: Offre) {
    const navigationExtras: NavigationExtras = {
      state: {
        offre: offre
      }
    };
    this.router.navigate(['/detailoffer'], navigationExtras);
  }
}
