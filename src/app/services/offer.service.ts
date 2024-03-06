import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  BASE_URL="http://localhost:9090/pidev/Offer";
  constructor(private http : HttpClient) { }

  getOffers():Observable<any>{
    return this.http.get(this.BASE_URL+"/allOffers")
  }

  getOffreByReference(ref: string): Observable<any> {
    const url = `${this.BASE_URL}/getOffreByReference/${ref}`;
    return this.http.get<any>(url);
  }
}
