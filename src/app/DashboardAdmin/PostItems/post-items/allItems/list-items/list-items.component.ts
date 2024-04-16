import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ListStandComponent } from 'src/app/DashboardAdmin/list-stand/list-stand.component';
import { PlaceComponent } from 'src/app/DashboardAdmin/place/place.component';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  sessions: any[] = [];

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
          element.processedImg = 'data:image/jpeg;base64,'+element.byteImg;
          this.sessions.push(element);
          
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

    reserver(id:any){
      this.router.navigate([`/Add/reservation/${id}`]);
    }

}
