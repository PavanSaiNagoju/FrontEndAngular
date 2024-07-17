import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-show-all-users',
  templateUrl: './admin-show-all-users.component.html',
  styleUrls: ['./admin-show-all-users.component.css']
})
export class AdminShowAllUsersComponent implements OnInit {
  showAllUserArray:any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.showAllUsers().subscribe((Response: any)=>{
      console.log(Response);
      this.showAllUserArray=Response;
    })
 
  }
 
  goBack(): any {
    this.router.navigate(['/admin-functionality']);
  }
}


