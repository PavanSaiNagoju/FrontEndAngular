import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from './user-details';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  
 constructor(private httpClient: HttpClient) { }

 //  getUserDetails(id:number): Observable<any>{
   //  return this.httpClient.get(`${this.baseUrl}/${id}`);
 //  }
   getuserDetailsList(): any{
     console.log("hello");
     return this.httpClient.get("http://localhost:8081/api/homeloan/userdetails");
   }
   addUserDetails(email:string,userDetails:UserDetails):any{
    return this.httpClient.post("http://localhost:8081/api/homeloan/userdetails/"+email,userDetails);
   }
   updateUserDetails(updatedUserDetails:UserDetails):any{
    return this.httpClient.put("http://localhost:8081/api/homeloan/userdetails",updatedUserDetails);
   }
  }
 