import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'Angular';
  title = 'home-loan-application';
  constructor( http:HttpClient){

      // this.headers = new HttpHeaders()
      // .set('Access-Control-Allow-Origin', "*")
      // .set("Content-Type", "application/json")
      // .set("Access-Control-Expose-Headers", "Content-Length");

  }
}

