import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {

  items: any[] = [];

  constructor(private adminservice : AdminServiceService,
    private snackbar : MatSnackBar,
    private router :Router,
    private auction:AuctionService
    ){}

    ngOnInit():void{
      this.getAllItems();
    }

    createAuction(a: any) {
      // You might need some default values or fetching data for your auctionDto
      const auctionDto = {
         // codeitem: a // Example DTO structure, replace with your actual AuctionDTO requirements
          // Add other properties as required e.g. startingBid, auctionDate etc.
          // startDate: new Date(),
          // endDate: ...
      };
      console.log(auctionDto);

      this.auction.addItem(a,auctionDto).subscribe({
          next: (response) => {
              // Handle response from your backend if necessary
              console.log('Auction created successfully', response);
              this.snackbar.open('Auction added successfully', 'Close', { duration: 5000 });

              // You may want to refresh your item/auction list or navigate
              // this.router.navigate(['/path-to-auction-details', response.id]);
          },
          error: (error) => {
              // Handle any errors here
              console.error('Error creating auction', error);
              this.snackbar.open('product Already have an Auction', 'Close', { duration: 5000 });

          }
      });
  }

    getAllItems(){
      this.items=[];
      this.adminservice.getItem().subscribe(res =>{
        res.forEach((element: { processedImg: string; byteImg: string; }) => {
          element.processedImg = 'data:image/jpeg;base64,'+element.byteImg;
          this.items.push(element);
          
        });
      })
    }
    deleteItem(itemId:any){
      this.adminservice.deleteItemById(itemId).subscribe(res=>{
        if(res && res.body){
          this.snackbar.open('Erreur', 'Close', { duration: 5000 });
          //this.router.navigateByUrl('/admin/dashboard');
        //  window.location.reload(); // or location.reload()
        }else{
          this.snackbar.open('item deleted successfully', 'Close', { duration: 5000 });
  
         // window.location.reload(); // or location.reload()
                 this.getAllItems();
        }
      })
    }

}
