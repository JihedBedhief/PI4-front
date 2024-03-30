import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = "http://localhost:9090/" 
@Injectable({
  providedIn: 'root'
})
export class KeycloakrestapiService {

  constructor(private http: HttpClient) { }


  getAllUsers(){
    return this.http.get(BASE_URL + "liste-users");
  }
  getAllRolesByNames(){
    return this.http.get(BASE_URL +"liste-RolesNames");
  }

  AddRoleToUser(roleName: string, username: string){
    const roleData = { roleName, username };
    return this.http.post(BASE_URL + "add-role-to-user",roleData);
  }


  getUserRoles(username: string){
    return this.http.get(BASE_URL+"users/"+username+"/roles") ;
  }
}
