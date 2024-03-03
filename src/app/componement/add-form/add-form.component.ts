import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OffreService } from '../../services/offre.service';
import { ToastrService } from 'ngx-toastr';


enum ExperienceLevel {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced'
}
enum ContratType {
  CDI = 'CDI',
  CDD = 'CDD',
  Stage = 'Stage',
  Freelance = 'Freelance'
}

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  providers: [OffreService]
})
export class AddFormComponent implements OnInit {
  experienceLevels = Object.values(ExperienceLevel);
  contratTypes = Object.values(ContratType);
  offreForm!: FormGroup;
  OfferArray: any[] = [];

  constructor(private offreservice: OffreService, private http: HttpClient, private fb: FormBuilder ,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.offreForm = this.fb.group({
      reference: [null, [Validators.required]],
      title: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]], // Accepte uniquement des lettres et des espaces
      location: [null, [Validators.required]],
      description: [null, [Validators.required]],
      deadline: [null, [Validators.required]],
      contratType: [null, [Validators.required]],
      skills: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]], // Accepte uniquement des lettres et des espaces
      experienceLevel: [null, [Validators.required]],
      favorite: false

    });
  }



  

  addItem(): void {
    if (this.offreForm.invalid) {
      this.offreForm.markAllAsTouched();
    } else {
      
      this.offreservice.addOffre(this.offreForm.value).subscribe(
        (res: any) => {
          if (res['id'] !== null) {
            this.offreForm.reset();
            this.getAllOffres();
            this.toastr.success('Offer added successfully', 'Success');
          } else {
            console.log(res);
          }
        },
        (error: any) => {
          console.error('Erreur lors de l\'ajout de l\'offre :', error);
          this.toastr.error('Error adding offer', 'Error');
        }
      );
    }
  }
  
  getAllOffres(): void {
    this.offreservice.getAllOffres().subscribe(
      (res: any) => {
        this.OfferArray = res;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des offres :', error);
        // Gérez l'erreur de manière appropriée
      }
    );
  }
  


  cancelAdd(): void {
    window.location.href = '/form';
  }
  
}