import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListStandComponent } from 'src/app/DashboardAdmin/list-stand/list-stand.component';
import { PlaceComponent } from 'src/app/DashboardAdmin/place/place.component';
import { AdminServiceService } from 'src/app/services/Session/admin-service.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent {
  sessions: any[] = [];
  id: any;

  constructor(private adminservice : AdminServiceService,
    private snackbar : MatSnackBar,
    private router :Router,
    private _dialogue : MatDialog

    ){}

    openAddBid(id: any){
      this._dialogue.open(PlaceComponent,{
        data: { id: id }
    });
    }
    
    ngOnInit():void{
      this.getAllItems();
    }

    getAllItems(){
      this.sessions=[];
      this.adminservice.getItem().subscribe(res =>{
        res.forEach((element: { processedImg: string; byteImg: string; }) => {
          this.sessions.push(element);
          
        });
      })
    }
    deleteItem(itemId:any){
      this.adminservice.deleteItemById(itemId).subscribe(
        res => {
          this.snackbar.open('Item deleted successfully', 'Close', { duration: 5000 });
          this.getAllItems(); // Rafraîchir la liste des sessions après la suppression
        },
        error => {
          console.error('Error deleting item:', error);
          this.snackbar.open('Error deleting item', 'Close', { duration: 5000 });
        }
      );
    }
    update(){
      const idsessions = this.id; // Assuming you want to use 'id' as 'idsessions'
     
      if (idsessions ) {
        this.router.navigate([`session/${idsessions}`]);
      }
    }    

    reserver(id:any){
      this.router.navigate([`/Add/reservation/${id}`]);
    }

}
