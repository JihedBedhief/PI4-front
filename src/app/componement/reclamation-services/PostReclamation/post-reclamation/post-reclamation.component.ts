import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReclamationService } from 'app/services/ServiceReclamation/reclamation.service';

@Component({
  selector: 'app-post-reclamation',
  templateUrl: './post-reclamation.component.html',
  styleUrls: ['./post-reclamation.component.css']
})
export class PostReclamationComponent implements OnInit {
  itemForm!: FormGroup;
  
  types = [
    {value: 'Inappropriate Content', viewValue: 'Inappropriate Content'},
    {value: 'Technical Issues', viewValue: 'Technical Issues'},
    {value: 'Harassment or Abuse', viewValue: 'Harassment or Abuse'},
    {value: 'Moderation Error', viewValue: 'Moderation Error'},
    {value: 'Outdated Content', viewValue: 'Outdated Content'}
  ];

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private reclamationService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.itemForm = this.fb.group({
      userId: [null, [Validators.required]], // Add user ID field
      description: [null, [Validators.required]],
      type: [null, [Validators.required]]
    });
  }

  addItem(): void {
    if (this.itemForm.valid) {
      const userId = this.itemForm.value.userId;
      const commentPayload = {
        description: this.itemForm.value.description,
        type: this.itemForm.value.type
        
      };
      
      // Call the service method to add the item
      this.reclamationService.addItem(commentPayload, userId).subscribe(
        (res) => {
          if (res.id !== null) {
            // If the item is added successfully, show success message and navigate
            this.snackbar.open('Item added successfully', 'Close', { duration: 5000 });
            this.router.navigateByUrl('/reclamation');
          } else {
            // If the server returns an error, show error message
            this.snackbar.open('Failed to add item', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
          }
        },
        (error) => {
          // If there is an error during the HTTP request, show error message
          console.error('Error:', error);
          this.snackbar.open('An error occurred you have 0 reclamation', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      );
    } else {
      // Mark all form fields as touched to display error messages
      this.itemForm.markAllAsTouched();
    }
  }
}
