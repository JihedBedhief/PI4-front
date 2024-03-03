import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';
import { Router } from '@angular/router';
import { Offre } from '../models/offre';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  filteredOffres: Offre[] = [];
  
  constructor(
    private offreService: OffreService,
    private router: Router // Inject Router service here
  ) {}

  

  ngOnInit(): void {
    this.loadOffres();
  }
  
  loadOffres() {
    this.offreService.getAllOffres().subscribe({
        next: (data: Offre[]) => {
            // Filtrer les offres pour n'afficher que celles avec l'attribut favouris à true
            this.filteredOffres = data.filter(offre => offre.favorite === true);
        },
        error: (error) => {
            console.log('Erreur lors du chargement des offres:', error);
        },
    });
}
  goToDetails(favorite: Offre): void {
    this.router.navigate(['/detailoffer', favorite.reference], { state: { offre: favorite } });
  }
  
  goBack(): void {
    this.router.navigateByUrl('/offercard'); 
  }
  
  removeFromFavorites(favorite: Offre): void {
    this.offreService.removeFromFavorites(favorite).subscribe(
        () => {
            // Mettre à jour la liste des favoris après la suppression
            this.filteredOffres = this.filteredOffres.filter(item => item !== favorite);
        },
        error => {
            console.log('Erreur lors de la suppression de l\'offre des favoris :', error);
        }
    );
}

  
}
