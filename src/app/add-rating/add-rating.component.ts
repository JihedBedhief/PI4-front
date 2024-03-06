import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OffreService } from '../services/offre.service';
import { Rating } from '../models/rating';
import { Offre } from '../models/offre';

@Component({
  selector: 'app-add-rating',
  templateUrl: './add-rating.component.html',
  styleUrls: ['./add-rating.component.css']
})
export class AddRatingComponent implements OnInit {
  ratingValue: number=0;
  ngOnInit(): void {
    // Initialisation ou traitement à effectuer lors de l'initialisation du composant
  }
  constructor(
    public dialogRef: MatDialogRef<AddRatingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ratingService: OffreService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onSubmitRating(): void {
    const ratingData = {
      reference: this.data.offre.reference,
      ratingValue: this.ratingValue
    };
  
    this.ratingService.addRating(ratingData).subscribe(
      response => {
        console.log('Réponse du serveur:', response);
        // Vérifier si la réponse est une erreur ou non
        if (response.status === 200) {
          alert('Rating ajouté avec succès');
          // Rating ajouté avec succès
          // Fermez la boîte de dialogue après avoir reçu la réponse du serveur
          this.dialogRef.close();
        } else {
          alert('Une erreur s\'est produite lors de l\'ajout de la notation.');
        }
      },
      error => {
        console.error('Failed to add rating:',error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
        alert('Rating ajouté avec succès.');
      }
    );
  }
  
}     