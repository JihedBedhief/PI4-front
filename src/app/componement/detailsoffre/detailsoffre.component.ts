import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offre } from 'src/app/models/offre';
import { OffreService } from 'src/app/services/offre.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { AddRatingComponent } from 'src/app/add-rating/add-rating.component';

@Component({
  selector: 'app-detailsoffre',
  templateUrl: './detailsoffre.component.html',
  styleUrls: ['./detailsoffre.component.css']
})
export class DetailsoffreComponent implements OnInit {
  offre: Offre = {
    reference: '',
    title: '',
    location: '',
    description: '',
    deadline: new Date(),
    contratType: '',
    skills: '',
    experienceLevel: '',
    favorite: false // Initialize favouris as false
  };  
  reference: any;
  isShareDropdownOpen: boolean = false; // Declare isShareDropdownOpen here


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
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const stateData = navigation.extras.state as { offre: Offre }; // Explicitly type state
      this.offre = stateData.offre;
    } else {
      this.route.paramMap.subscribe(params => {
        const reference = params.get('reference');
        if (reference) {
          this.loadOfferDetails(reference);
        }
      });
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
  addToFavorites(): void {
    if (this.offre && this.offre.reference) {
        // Vérifier si l'offre est déjà dans la liste des favoris
        if (this.offre.favorite) {
            alert('Cette offre est déjà dans vos favoris.');
            return; // Arrêter l'exécution de la fonction
        }

        // Ajouter l'offre aux favoris seulement si elle n'est pas déjà dans la liste des favoris
        this.offreService.addToFavorites(this.offre.reference, true).subscribe(
            () => {
                console.log('Offer added to favorites successfully.');
                // Mettre à jour le statut de l'offre localement pour refléter son ajout aux favoris
                this.offre.favorite = true;
                // Afficher une alerte pour indiquer que l'offre a été ajoutée avec succès aux favoris
                alert('L\'offre a été ajoutée avec succès à vos favoris.');
                // Handle any additional actions after successfully adding to favorites
            },
            (error) => {
                console.error('Error adding offer to favorites:', error);
            }
        );
    } else {
        console.error('Offer reference is missing or undefined.');
    }
}
toggleShareDropdown(): void {
  this.isShareDropdownOpen = !this.isShareDropdownOpen;
}

shareOnFacebook(): void {
  window.open('https://www.facebook.com/?locale=fr_FR' + encodeURIComponent(window.location.href), '_blank');
  this.isShareDropdownOpen = false;
}

shareOnTwitter(): void {
  window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href), '_blank');
  this.isShareDropdownOpen = false;
}

shareOnLinkedIn(): void {
  window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href), '_blank');
  this.isShareDropdownOpen = false;
}

shareOnInstagram(): void {
  window.open('https://www.instagram.com/', '_blank');
  this.isShareDropdownOpen = false;
}

/*
//the rating function
openRatingPopup(): void {
  const dialogRef = this.dialog.open(AddRatingComponent, {
    width: '400px',
    data: { offreReference: this.offre.reference }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result === 'success') {
      alert('Thank you for evaluating our offer!');
      // Optionally, you can perform any additional actions here
    }
  });




}
*/

openEvaluationDialog(): void {
  const dialogRef = this.dialog.open(AddRatingComponent, {
    width: '250px',
    data: { offre: this.offre }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('La boîte de dialogue d\'évaluation est fermée');
    // Vous pouvez ajouter des actions supplémentaires ici après la fermeture de la boîte de dialogue
  });
}
  
  
}