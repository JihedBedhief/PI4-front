import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  BASE_URL="http://localhost:9090/pidev/Application";
  constructor(private http : HttpClient) { }

  
addApplication(app:any):Observable<any>{
  const headers = new HttpHeaders();
  return this.http.post(this.BASE_URL+"/addApplication",app, { headers: headers })
}


getApplications():Observable<any>{
  return this.http.get(this.BASE_URL+"/allApplications")
}

getApplicationByCode(code: string): Observable<any> {
  const url = `${this.BASE_URL}/getApplicationByCode/${code}`;
  return this.http.get<any>(url);
}

cancelApplication(appCode: string): Observable<any> {
  const url = `${this.BASE_URL}/cancelApplication/${appCode}`;
  return this.http.delete(url);
}
}
