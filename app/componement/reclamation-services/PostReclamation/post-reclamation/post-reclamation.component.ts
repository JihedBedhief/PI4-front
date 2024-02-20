import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ReclamationService } from 'src/app/Service/ServiceReclamation/reclamation.service';

@Component({
  selector: 'app-post-reclamation',
  templateUrl: './post-reclamation.component.html',
  styleUrls: ['./post-reclamation.component.css']
})
export class PostReclamationComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private adminService: ReclamationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.itemForm = this.fb.group({
     
      description: [null, [Validators.required]],
      type: [null, [Validators.required]],
      status: [null, [Validators.required]],
      date: [null, [Validators.required]]
    });
  }

  addItem(): void {
    if (this.itemForm.invalid) {
      for (const i in this.itemForm.controls) {
        if (Object.prototype.hasOwnProperty.call(this.itemForm.controls, i)) {
          this.itemForm.controls[i].markAsDirty();
          this.itemForm.controls[i].updateValueAndValidity();
        }
      }
    } else {

    // If form is valid, proceed to add the item
    const formData = new FormData();
    formData.append('type', this.itemForm.get('type')!.value);
    formData.append('description', this.itemForm.get('description')!.value);
    formData.append('status', this.itemForm.get('status')!.value);
    formData.append('date', this.itemForm.get('date')!.value);

    // Call the service method to add the item
    this.adminService.addItem(this.itemForm.value).subscribe((res) => {
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
        this.snackbar.open('An error occurred while adding the item', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    );
  }
}
}