import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.css']
})
export class DetailsoffreComponent implements OnInit {
  offre: Offre | undefined;

  constructor(
    private route: ActivatedRoute,
    private offreService: OffreService,
    private router: Router
  ) { 
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.offre = navigation.extras.state['offre'];
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const offreId = params.get('id'); // Supposons que l'identifiant de l'offre soit passé dans la route
      if (offreId) {
        this.offreService.getOffre(offreId).subscribe(
          (offre: Offre) => {
            this.offre = offre;
          },
          (error) => {
            console.error('Erreur lors de la récupération des détails de l\'offre : ', error);
          }
        );
      }
    });
  }
}
