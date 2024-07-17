import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanApplicationListComponent } from './loan-application/loan-application-list/loan-application-list.component';
import { LoanApplicationAddComponent } from './loan-application/loan-application-add/loan-application-add.component';
import { UserDetailsAddComponent } from './user-details/user-details-add/user-details-add.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsListComponent } from './user-details/user-details-list/user-details-list.component';
import { DatePipe } from '@angular/common';
import { LoanApplicationSubmitComponent } from './loan-application/loan-application-submit/loan-application-submit.component';
import { LoanApplicationPendingUserViewComponent } from './loan-application/loan-application-pending-user-view/loan-application-pending-user-view.component';
import { LoanApplicationPendingUserShowComponent } from './loan-application/loan-application-pending-user-view/loan-application-pending-user-show/loan-application-pending-user-show.component';
import { LoanApplicationPendingEditComponent } from './loan-application/loan-application-pending-edit/loan-application-pending-edit.component';
import { LoanApplicationApprovedUserComponent } from './loan-application/loan-application-approved-user/loan-application-approved-user.component';
import { LoanApplicationRejectedUserComponent } from './loan-application/loan-application-rejected-user/loan-application-rejected-user.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminFunctionalitiesComponent } from './admin/admin-functionalities/admin-functionalities.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { ApprovePendingLoansComponent } from './approved-loans/approve-pending-loans/approve-pending-loans.component';
import { AdminApprovedLoansComponent } from './loan-application/admin-approved-loans/admin-approved-loans.component';
import { AdminRejectedLoansComponent } from './loan-application/admin-rejected-loans/admin-rejected-loans.component';
import { AdminShowAllUsersComponent } from './user/admin-show-all-users/admin-show-all-users.component';
import { LoanApplicationSearchComponent } from './loan-application/loan-application-search/loan-application-search.component';
import { UserGetByEmailComponent } from './user/user-get-by-email/user-get-by-email.component';
import { ViewAccountDetailsComponent } from './approved-loans/view-account-details/view-account-details.component';
import { UserViewAccountDetailsComponent } from './approved-loans/user-view-account-details/user-view-account-details.component';
import { UserDetailsEditComponent } from './user-details/user-details-edit/user-details-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanApplicationListComponent,
    LoanApplicationAddComponent,
    UserDetailsAddComponent,
    UserDetailsListComponent,
    LoanApplicationSubmitComponent,
    LoanApplicationPendingUserViewComponent,
    LoanApplicationPendingUserShowComponent,
    LoanApplicationPendingEditComponent,
    LoanApplicationApprovedUserComponent,
    LoanApplicationRejectedUserComponent,
    AdminLoginComponent,
    AdminFunctionalitiesComponent,
    UserLoginComponent,
    UserAddComponent,
    ApprovePendingLoansComponent,
    AdminApprovedLoansComponent,
    AdminRejectedLoansComponent,
    AdminShowAllUsersComponent,
    LoanApplicationSearchComponent,
    UserGetByEmailComponent,
    ViewAccountDetailsComponent,
    UserViewAccountDetailsComponent,
    UserDetailsEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
