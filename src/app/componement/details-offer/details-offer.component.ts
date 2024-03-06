import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-details-offer',
  templateUrl: './details-offer.component.html',
  styleUrls: ['./details-offer.component.css']
})
export class DetailsOfferComponent {
  addToFavorites() {
    throw new Error('Method not implemented.');
    }
      offre: any = {
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
        private offreService: OfferService,
        private router: Router
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
        this.offreService.getOffreByReference(reference).subscribe(
          (offre: any) => {
            this.offre = offre;
          },
          (error) => {
            console.error('Erreur lors de la récupération des détails de l\'offre : ', error);
          }
        );
      }
    
      
    
      goBack(): void {
        this.router.navigateByUrl('/offercard'); 
      }
    
     
      
      

}
