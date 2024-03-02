import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Inject } from '@angular/core';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  
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
    private dialogRef: MatDialogRef<EditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {}

  ngOnInit(): void {
    if (this.data && this.data.offre) {
      this.offre = this.data.offre;
    } else {
      console.error('Data not received properly.');
    }
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
  
  updateOffre(): void {
    // Vérifiez si le formulaire est valide
    if (this.isFormValid()) {
      // Appelez la méthode de service pour mettre à jour l'offre
      this.offreService.updateOffre(this.offre.reference, this.offre).subscribe(
        (data: any) => {
          console.log('Offre mise à jour avec succès', data);
          // Naviguer vers la page de détails de l'offre mise à jour
          this.router.navigateByUrl('/detailoffer').then(() => {
            // Rafraîchir le composant de détails de l'offre
            this.loadOfferDetails(this.offre.reference);
          });
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'offre : ', error);
        }
      );
    } else {
      console.error('Formulaire invalide. Veuillez vérifier les champs.');
    }
  }
  
  
  
  isFormValid(): boolean {
    return !!(
      this.offre &&
      this.offre.reference &&
      this.offre.title &&
      this.offre.location &&
      this.offre.description &&
      this.offre.deadline &&
      this.offre.contratType &&
      this.offre.skills &&
      this.offre.experienceLevel
    );
  }
  
  cancelEdit(): void {
    this.dialogRef.close('cancel');
  }
}
