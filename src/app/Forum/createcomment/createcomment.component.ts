import { Component } from '@angular/core';
import { PostlistComponent } from '../post/postlist/postlist.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePostService } from 'src/app/services/ServiceForum/service-post.service';
import { ServiceCommentService } from 'src/app/services/Comment/service-comment.service';

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css']
})
export class CreatecommentComponent {

  commentForm!: FormGroup; 
  itemId: any;
  item: any;
  hideCodeReclamation: boolean = true;
width: any;

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private commentService: ServiceCommentService, 
    private post: ServicePostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm();

    // Retrieve the ID of the post from the route parameters
    this.route.params.subscribe(params => {
      this.itemId = params['id'];
      // Call a method to fetch the post data by its ID
      this.getPostById(this.itemId);
    });
  }
  getPostById(itemId: any): void {
    this.post.getPostById(itemId).subscribe(res => {
      this.item = res;
      // Set the form values with the fetched post data
      this.commentForm.patchValue({
        codepost: this.item.codepost,
      });
    });
  }

  initializeForm(): void {
    this.commentForm = this.fb.group({
      codepost: [null, Validators.required], 
     
      comment: [null, Validators.required],
      
    });
  }
  addComment(): void {
    if (this.commentForm.valid) {
      const postId = this.commentForm.value.codepost;
      
      const commentPayload = {
        comment: this.commentForm.value.comment,
    
      };
      
      this.commentService.addComment(commentPayload, postId).subscribe({
        next: (res) => {
          this.snackbar.open('Comment added successfully', 'Close', { duration: 5000 });
          this.router.navigate(['/post']); 
        },
        error: (error) => {
          console.error(error);
          this.snackbar.open('Failed to add comment', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
        }
      });
    } else {
      this.commentForm.markAllAsTouched();
    }
  }
  
}