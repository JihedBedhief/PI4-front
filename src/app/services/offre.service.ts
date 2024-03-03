import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private BASE_URL = "http://localhost:9090/";

  constructor(private http: HttpClient) { }

getAllOffres(): Observable<any> {
  return this.http.get(`${this.BASE_URL}Offer/getAll`);
}

 addOffre(offre: any): Observable<any> {
  return this.http.post(`${this.BASE_URL}Offer/addOffre`, offre);
}

updateOffre(reference: string, offre: Offre): Observable<Offre> {
  const url = `${this.BASE_URL}Offer/offres/${reference}`;
  return this.http.put<Offre>(url, offre);
}

  deleteOffre(reference: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}Offer/delete/${reference}`);
  }


  getOffre(reference: string): Observable<Offre> {
    return this.http.get<Offre>(`${this.BASE_URL}Offer/offres/${reference}`); 
  }
  addToFavorites(reference: string, favoriteStatus: boolean): Observable<any> {
    const url = `${this.BASE_URL}Offer/offres/${reference}/favorite?favoriteStatus=${favoriteStatus}`;
    return this.http.put(url, {});
  }
  removeFromFavorites(offre: Offre): Observable<any> {
    return this.http.put<any>('http://localhost:9090/Offer/updateOffreAsNotFavorite', offre);
}

  


}
