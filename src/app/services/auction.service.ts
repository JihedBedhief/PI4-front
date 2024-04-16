import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL ="http://localhost:8088/";


@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor(private http:HttpClient) { }

  addItem(auctionDto:any):Observable<any>{
    return this.http.post(BASE_URL+"api/admin/Auction/Add",auctionDto)
  }

}
