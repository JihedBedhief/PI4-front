import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BidServiceService } from 'app/services/bid-service.service';

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.component.html',
  styleUrls: ['./add-bid.component.css']
})
export class AddBidComponent {
  BifForm!: FormGroup ;
  constructor(private bidservice : BidServiceService ,  private _fb : FormBuilder,    private snackbar : MatSnackBar,
    private _dialogue : MatDialogRef<AddBidComponent>,@Inject(MAT_DIALOG_DATA) public data: { codeAuction: any }) {
    console.log(this.data); // This will log the passed ID in the console
} 

ngOnInit():void{
  this.BifForm = this._fb.group({
    idUser:1,
    idAuction:this.data.codeAuction,
    amount:''


  });
 // this.populateForm();
}

onFormSubmit(){
  console.log(this.BifForm.value);
  if(this.BifForm.valid){
    const formData: FormData = new FormData();
    formData.append('idUser', "1");
    formData.append('idAuction',this.data.codeAuction);
    formData.append('amount', this.BifForm.get('amount')!.value);
    this.bidservice.addBid(formData).subscribe({
      next: (response) => {
          // Handle response from your backend if necessary
          console.log('Bid created successfully', response);
          this.snackbar.open('Your bid added successfully', 'Close', { duration: 5000 });

          // You may want to refresh your item/auction list or navigate
          // this.router.navigate(['/path-to-auction-details', response.id]);
      },
      error: (error) => {
        console.log(this.BifForm.value);

          // Handle any errors here
          console.error('Error creating auction', error);
          this.snackbar.open('You already hav a bid', 'Close', { duration: 5000 });

      }
  });
  }
}

/*async populateForm() {
  const id = this.data.codeAuction; // Assuming this is a promise


  // Use Promise.all to await all promises concurrently
  const [code] = await Promise.all([
    id
    
  ]);

}*/

}
