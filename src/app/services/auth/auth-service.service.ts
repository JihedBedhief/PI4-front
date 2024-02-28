import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from '../storage/user-storage.service';
import { Observable, map } from 'rxjs';
const BASE_URL ="http://localhost:8088/Auth/";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http :HttpClient,
    private userStorageService: UserStorageService) { }

  register(signupRequest:any): Observable<any> {
    return this.http.post(BASE_URL+"signup",signupRequest);

  }

  login(username:string,password:string):any{
    const headers = new HttpHeaders().set('Content-Type','application/json');
    const body = {username,password};
    return this.http.post(BASE_URL+"login",body,{headers , observe:'response' }).pipe(
      map((res)=>{
        const token = res.headers.get('Authorization')?.substring(7);
        const user =res.body;
        console.log(res.headers)
        console.log(user)
        if(token && user){
          this.userStorageService.saveToken(token);
          this.userStorageService.saveUser(user);
          return true ;
        }
        return false
  }
    )
    )
  }


}
