import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/Session/admin-service.service';

@Component({
  selector: 'app-post-session',
  templateUrl: './post-session.component.html',
  styleUrls: ['./post-session.component.scss']
})
export class PostSessionComponent implements OnInit {
  stepOneForm!: FormGroup;
  dateControl = new FormControl(); // Contrôle pour la date
  selectedFile!: File;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private adminService: AdminServiceService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.stepOneForm = this.fb.group({
      date: this.dateControl,
      location: [null, [Validators.required]],
      duration: [null, [Validators.required]],
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile as Blob);
  }

  submitSession(): void {
    if (this.stepOneForm.invalid) {
      // Highlight the form's validation errors
      for (const i in this.stepOneForm.controls) {
        if (this.stepOneForm.controls.hasOwnProperty(i)) {
          this.stepOneForm.controls[i].markAsDirty();
          this.stepOneForm.controls[i].updateValueAndValidity();
        }
      }
      
    } else {
      // Process the form's valid data
      const sessionData = this.stepOneForm.value;
      
      console.log(sessionData)
      // Here, you could send sessionData to your backend or process it as needed.
      this.adminService.addItem2(sessionData,this.selectedFile).subscribe((response) => {
        // Traiter la réponse du backend après l'ajout du stand
        console.log('Session ajouté:', response);
      });

      // Optionally navigate away or reset form
      // this.router.navigate(['/someRoute']);
      // this.stepOneForm.reset();
    }
  }
getNavbarHeight(): string {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    return navbar.clientHeight + 'px';
  }
  return '0px';
}

}
