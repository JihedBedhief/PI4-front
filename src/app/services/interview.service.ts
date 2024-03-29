import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  private BASE_URL = "http://localhost:9090/pidev/Interview"; 

  constructor(private http: HttpClient) { }


  scheduleInterview(interview: any, applicationId: string) {
    return this.http.post<any>(this.BASE_URL + "/scheduleInterview?applicationId=" + applicationId, interview);
  }
  
  getInterviews():Observable<any>{

    return this.http.get(this.BASE_URL+"/allInterviews")
  }
}
