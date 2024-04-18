import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>Confirmation</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true" (click)="confirmAndShowAlert()" class="btn btn-danger">confirm</button>
      <button mat-button [mat-dialog-close]="false">cancel</button>
    </mat-dialog-actions>
  `,
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  confirmAndShowAlert() {
    // Confirmez vos actions ici, par exemple, redirigez vers la page appropriée
    // Supposons que vous redirigez vers la page "/dashboard/admin/list"
    this.router.navigate(['/dashboard/admin/list']);

    // Ensuite, affichez l'alerte
    this.snackBar.open('you will recieve a mail confirmation !', 'close', {
      duration: 3000 // La durée en millisecondes pour laquelle l'alerte doit être affichée
    });
  }
}
