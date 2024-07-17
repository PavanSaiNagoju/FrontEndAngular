import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { user } from './user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers: any;
  constructor(private httpClient: HttpClient) { 
    this.headers = new HttpHeaders().set('Access-Control-Allow-Origin', "*")
      .set("Content-Type", "application/json");
  }
 checkLogin(login:Login):Observable<any>{
    return this.httpClient.get("http://localhost:8081/api/homeloan/userlogin/"+login.email+"/"+login.password, {headers:this.headers});
  }
  
adduser(useradd:user):any{
console.log("service"+useradd);
//console.log("service"+useradd.password);
return this.httpClient.post("http://localhost:8081/api/homeloan/userregister",useradd);
}

showAllUsers(): any{
  return this.httpClient.get("http://localhost:8081/api/homeloan/userregister");
}
getUserDetails(email:string): any{
  return this.httpClient.get("http://localhost:8081/api/homeloan/userregister"+email);
  }
}

