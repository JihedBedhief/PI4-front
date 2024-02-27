import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:8088/";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  getAllOffres() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

 
  
  getItem():Observable<any>{
    return this.http.get(BASE_URL+"api/admin/items"
    )
  }
  getItemById(idItem : any):Observable<any>{
    return this.http.get(BASE_URL+`api/admin/items/${idItem}`
    )
  }
  addItem(itemDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/admin/items/Add",itemDto)
  }
  deleteItemById(idItem : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/admin/items/delete/${idItem}`)
  }

}
