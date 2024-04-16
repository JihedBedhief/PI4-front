import { Component } from '@angular/core';
import { ResumeService } from 'app/services/resume/resume.service';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent {
  constructor(private resumeService: ResumeService) { }

  onSubmit(resumeData: any) {
    this.resumeService.postResume(resumeData).subscribe(
      response => {
        if (response === 'Success') {
          alert('Your resume is ready!');
        } else {
          alert('Failed to generate resume.');
        }
      },
      error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      }
    );
  }
}
