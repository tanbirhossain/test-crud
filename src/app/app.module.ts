import { AuthInterceptor } from './auth/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";



import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EmployeeService } from "./services/employee.service";
import { EmployeeAddComponent } from './Components/employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './Components/employees/employee-list/employee-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AppComponent } from './Shared/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/Security/login/login.component';
import { RegistrationComponent } from './Components/Security/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [

    EmployeeAddComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    AppComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    EmployeeService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// https://appdividend.com/2018/11/04/angular-7-crud-example-mean-stack-tutorial/
