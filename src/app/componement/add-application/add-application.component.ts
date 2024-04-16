import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent {
  /*applicationForm: FormGroup;

  constructor(private formBuilder: FormBuilder , private applicationService : ApplicationService) {
    this.applicationForm = this.formBuilder.group({
      contact: ['', [Validators.required, Validators.email]],
      portfolio: ['', Validators.required],
      cv: [''],
      lettre: ['']
    });
  }

 
  onSubmit() {
    
      const formData = new FormData();
      formData.append('titre', this.applicationForm.get('contact')!.value);
      formData.append('content', this.applicationForm.get('portfolio')!.value);
  
      this.applicationService.addApplication(formData).subscribe((response) => {
        console.log('App créée avec succès !', response);
        
      }, (error) => {
        console.error('Erreur lors de la création de la App : ', error);
      });
    
  }*/
  
  
  applicationForm!: FormGroup;
  

  constructor(private applicationService: ApplicationService, 
    private http: HttpClient, private fb: FormBuilder , private router : Router  ) { }

  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      contact: ['', [Validators.required, Validators.email]],
      portfolio: ['', [Validators.required, Validators.pattern('https?://.+')]],
      cv: ['']
    });
  }


  addApplication(): void {
    

if(this.applicationForm.value)
      this.applicationService.addApplication(this.applicationForm.value).subscribe(
        (response) => {
          console.log(response);
          console.log('App créée avec succès !', response);
          this.router.navigate(['/appList']);
        },
        (error) => {
          console.error('Erreur lors de la création de la App : ', error);
        }

      )
  }

  cancelAdd(): void {
    window.location.href = '/appList';
  }
  
}
