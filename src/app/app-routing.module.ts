import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoanApplicationAddComponent } from './loan-application/loan-application-add/loan-application-add.component';
import { LoanApplicationListComponent } from './loan-application/loan-application-list/loan-application-list.component';
import { LoanApplicationSubmitComponent } from './loan-application/loan-application-submit/loan-application-submit.component';
import { LoanApplicationPendingUserViewComponent } from './loan-application/loan-application-pending-user-view/loan-application-pending-user-view.component';
import { LoanApplicationRejectedUserComponent } from './loan-application/loan-application-rejected-user/loan-application-rejected-user.component';
import { LoanApplicationApprovedUserComponent } from './loan-application/loan-application-approved-user/loan-application-approved-user.component';
import { LoanApplicationPendingEditComponent } from './loan-application/loan-application-pending-edit/loan-application-pending-edit.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminFunctionalitiesComponent } from './admin/admin-functionalities/admin-functionalities.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ApprovePendingLoansComponent } from './approved-loans/approve-pending-loans/approve-pending-loans.component';
import { AdminApprovedLoansComponent } from './loan-application/admin-approved-loans/admin-approved-loans.component';
import { AdminRejectedLoansComponent } from './loan-application/admin-rejected-loans/admin-rejected-loans.component';
import { AdminShowAllUsersComponent } from './user/admin-show-all-users/admin-show-all-users.component';
import { UserDetailsAddComponent } from './user-details/user-details-add/user-details-add.component';
import { UserGetByEmailComponent } from './user/user-get-by-email/user-get-by-email.component';
import { LoanApplicationSearchComponent } from './loan-application/loan-application-search/loan-application-search.component';
import { ViewAccountDetailsComponent } from './approved-loans/view-account-details/view-account-details.component';
import { UserViewAccountDetailsComponent } from './approved-loans/user-view-account-details/user-view-account-details.component';
import { UserDetailsEditComponent } from './user-details/user-details-edit/user-details-edit.component';

const routes: Routes = [
  {path: 'loan-application-add/:type/:interest/:email/:userId', component: LoanApplicationAddComponent},
  {path: 'loan-application-submit/:userId/:email', component: LoanApplicationSubmitComponent},
  {path: 'loan-application-pending-user-view/:email', component: LoanApplicationPendingUserViewComponent},
  {path: 'loan-application-rejected-user/:email', component: LoanApplicationRejectedUserComponent},
  {path: 'loan-application-approved-user/:email', component: LoanApplicationApprovedUserComponent},
  {path: 'loan-application-pending-edit', component: LoanApplicationPendingEditComponent},
  {path: 'loan-application-list', component: LoanApplicationListComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'admin-functionality', component: AdminFunctionalitiesComponent},
  {path:'user-register',component:UserAddComponent},
  {path:'user-details-add/:email',component:UserDetailsAddComponent},
  {path: 'user-login',component:UserLoginComponent},
  {path: 'loan-application-list/:email/:userId', component: LoanApplicationListComponent},
  {path: 'admin-loan-application-approved', component: AdminApprovedLoansComponent},
  {path: 'admin-loan-application-rejected', component: AdminRejectedLoansComponent},
  {path: 'admin-show-all-users', component: AdminShowAllUsersComponent},
  {path: 'user-get-by-email/:email', component: UserGetByEmailComponent},
  {path: '',component:LoanApplicationListComponent,pathMatch:'full'},
  {path: 'approve-loans',component: ApprovePendingLoansComponent},
  {path: 'loan-application-search/:chassisNo',component: LoanApplicationSearchComponent},
  {path: 'view-account-details',component: ViewAccountDetailsComponent},
  {path: 'user-details-edit',component: UserDetailsEditComponent},
  {path: 'user-view-account-details/:email',component: UserViewAccountDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
