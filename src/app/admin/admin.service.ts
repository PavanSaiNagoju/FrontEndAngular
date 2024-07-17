import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  headers: any;
  constructor(private httpClient: HttpClient) { 
    
    this.headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*")
      .set("Content-Type", "application/json");
  }
 
  checkLogin(admin:Admin):Observable<any>{
    
    return this.httpClient.get("http://localhost:8081/api/homeloan/adminlogin/"+admin.email+"/"+admin.password, {headers:this.headers});
  }
}
