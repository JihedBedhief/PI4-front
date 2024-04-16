import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { ReservationServiceService } from 'src/app/services/reservation-service.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {

  items: any[] = [];

  constructor(private adminservice : ReservationServiceService,
    private snackbar : MatSnackBar,
    private router :Router,
    ){}

    ngOnInit():void{
      this.getAllReservations();
    }

    
    getAllReservations(){
      this.items=[];
      this.adminservice.getItem().subscribe(res =>{
    this.items=res;
      })
    }
    deleteItem(itemId:any){
      this.adminservice.deleteItemById(itemId).subscribe(res=>{
        if(res && res.body){
          this.snackbar.open('Erreur', 'Close', { duration: 5000 });
          //this.router.²gateByUrl('/admin/dashboard');
        //  window.location.reload(); // or location.reload()
        }else{
          this.snackbar.open('item deleted successfully', 'Close', { duration: 5000 });
  
         // window.location.reload(); // or location.reload()
                 this.getAllReservations();
        }
      })
    }



}
