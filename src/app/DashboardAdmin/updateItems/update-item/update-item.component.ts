import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent {

  itemId = this.activatedroute.snapshot.params['id']; 
  itemForm!: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  existingImage : string |null= null ;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private adminService: AdminServiceService,
    private router: Router,
    private activatedroute:ActivatedRoute
  ) {}
  ngOnInit(): void {


    this.itemForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
        });
  }

  getItemById(){
    this.adminService.getItemById(this.itemId).subscribe(res=>{
      this.itemForm.patchValue(res);
      this.existingImage = `data:image/jpeg;base64,`+ res.byteImg;
     } )
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

  addItem(): void {
    if (this.itemForm.invalid) {
      for (const i in this.itemForm.controls) {
        if (Object.prototype.hasOwnProperty.call(this.itemForm.controls, i)) {
          this.itemForm.controls[i].markAsDirty();
          this.itemForm.controls[i].updateValueAndValidity();
        }
      }
    } else {
      const formData: FormData = new FormData();
      formData.append('img', this.selectedFile as Blob);
      formData.append('name', this.itemForm.get('name')!.value);
      formData.append('description', this.itemForm.get('description')!.value);
      formData.append('quantity', this.itemForm.get('quantity')!.value);

      this.adminService.addItem(formData).subscribe((res) => {
        if (res.id !== null) {
          this.snackbar.open('item added successfully', 'Close', { duration: 5000 });
          this.router.navigateByUrl('/dashboard/admin/list');
        } else {
          console.log(res);
          this.snackbar.open(res.message, 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      });
    }
  }

}

