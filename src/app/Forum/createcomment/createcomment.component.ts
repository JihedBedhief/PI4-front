import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePostService } from 'app/services/ServiceForum/service-post.service';
import { ServiceCommentService } from 'app/services/Comment/service-comment.service';

@Component({
  selector: 'app-createcomment',
  templateUrl: './createcomment.component.html',
  styleUrls: ['./createcomment.component.css']
})
export class CreatecommentComponent {

  commentForm!: FormGroup; 
  itemId: any;
  item: any;

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
      userId: [null, Validators.required], // Add userId field to the form
      comment: [null, Validators.required],
    });
  }

  addComment(): void {
    if (this.commentForm.valid) {
      const postId = this.commentForm.value.codepost;
      const userId = this.commentForm.value.userId;
  
      const commentPayload = {
        comment: this.commentForm.value.comment,
        userId: userId
      };

      this.commentService.addComment(commentPayload, postId,userId).subscribe({
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
