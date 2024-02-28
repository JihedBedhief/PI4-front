import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    deadline: new Date,
    contratType: '',
    skills: '',
    experienceLevel: ''
  };  
  reference: any;


  constructor(
    private route: ActivatedRoute,
    private offreService: OffreService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.reference = this.route.snapshot.params['reference'];
    this.offreService.getOffre(this.reference).subscribe(
      (data: Offre) => {
        this.offre = data;

        
     },    
      (error) => {
        console.error('Erreur lors du chargement de l\'offre : ', error);
      }
    );
  }

  updateOffre(): void {
    // Check if the form is valid
    if (this.isFormValid()) {
      // Construct the updated Offre object
      const updatedOffre: Offre = {
        reference: this.offre.reference,
        title: this.offre.title,
        location: this.offre.location,
        description: this.offre.description,
        deadline: this.offre.deadline,
        contratType: this.offre.contratType,
        skills: this.offre.skills,
        experienceLevel: this.offre.experienceLevel
      };
      // Call the service method to update the offer
      this.offreService.updateOffre(this.reference, updatedOffre).subscribe(
        (data: any) => {
          console.log('Offre mise à jour avec succès', data);
          // Redirect to the details page of the updated offer
          this.router.navigate(['/form']);
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
    this.router.navigate(['/form']); }
  
}
