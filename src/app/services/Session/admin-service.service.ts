import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL ="http://localhost:8088/";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http:HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }; 
  
  getItem():Observable<any>{
    return this.http.get(BASE_URL+"api/admin/Session"
    )
  }
  getItemById(idItem : any):Observable<any>{
    return this.http.get(BASE_URL+`api/admin/Session/${idItem}`
    )
  }
  addItem2(itemDto:any,flyer:File):Observable<any>{
    const formData = new FormData();
    formData.append('flyer', flyer);
    formData.append('date', itemDto.date);
    formData.append('location', itemDto.location);
    formData.append('duration', itemDto.duration);
  
    return this.http.post("http://localhost:8088/api/admin/Session/Add",formData )

  }
  addItem(itemDto:any):Observable<any>{
    const formData = new FormData();
    formData.append('date', itemDto.date);
    formData.append('location', itemDto.location);
    formData.append('duration', itemDto.duration);

    return this.http.post("http://localhost:8088/api/admin/Session/Add",formData)

  }
  deleteItemById(idItem : any):Observable<any>{
    return this.http.delete(BASE_URL+`api/admin/Session/delete/${idItem}`)
  }
  addStand(dto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/admin/Stand/Add",dto)
  }
}