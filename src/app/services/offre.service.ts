import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Offre } from '../models/offre';
import { SearchHistory } from '../models/SearchHistory';
import { query } from '@angular/animations';




@Injectable({
  providedIn: 'root'
})
export class OffreService {
  getContractTypeStatistics() {
    throw new Error('Method not implemented.');
  }

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
 // New method to search offers and save search history
 searchOffres(query: string): Observable<Offre[]> {
  return this.http.get<Offre[]>(`${this.BASE_URL}Offer/search?query=${query}`);
}

// New method to save search history
saveSearchHistory(searchHistory: SearchHistory): Observable<SearchHistory> {
  return this.http.post<SearchHistory>(`${this.BASE_URL}Offer/saveSearchHistory`, searchHistory);
}


// New method to get all search history
getAllSearchHistory(): Observable<SearchHistory[]> {
  return this.http.get<SearchHistory[]>(`${this.BASE_URL}Offer/getAllSearchHistory`);
}

deleteAllSearchHistory(): Observable<void> {
  return this.http.delete<void>(`${this.BASE_URL}Offer/deleteAllSearchHistory`).pipe(
    catchError((error: any) => {
      throw error;
    })
  );
}
/*calculateElapsedTime(reference: string): Observable<string> {
  return this.http.get<string>(`${this.BASE_URL}Offer/offres/${reference}/elapsedTime`);
}*/
calculateElapsedTime(reference: string): Observable<string> {
  const url = `${this.BASE_URL}Offer/offres/${reference}/elapsedTime`; // Remove the extra forward slash before reference
  return this.http.get<string>(url);
}

rateOffre(reference: string, rating: number): Observable<Offre> {
  return this.http.put<Offre>(`${this.BASE_URL}Offer/offres/${reference}/rate`, { rating });
}

getSimilarOffers(reference: string): Observable<Offre[]> {
  const url = `${this.BASE_URL}Offer/offres/${reference}/similar`;
  return this.http.get<Offre[]>(url);
}



}
