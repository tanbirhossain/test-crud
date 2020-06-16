import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './Components/Security/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EmployeeAddComponent } from './Components/employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './Components/employees/employee-list/employee-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
    {
      path: "employee/add",
      component: EmployeeAddComponent, canActivate:[AuthGuard]
    },
    {
      path: "employee/edit/:id",
      component: EmployeeAddComponent, canActivate:[AuthGuard]
    },
    {
      path: "employee/list",
      component: EmployeeListComponent, canActivate:[AuthGuard]
    },
    {
      path: "",
      redirectTo: "employee/add", canActivate:[AuthGuard],
      pathMatch: "full"
    },
    {
      path: "**",
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
