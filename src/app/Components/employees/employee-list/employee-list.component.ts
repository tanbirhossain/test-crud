import { from } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: any;

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployeeList().subscribe(
      (result) => {
        console.log("list data: ", result);
        this.employeeList = result;
      }

    );
  }
  addUser(): void {
    this.router.navigate(['employee/add']);
  }
  editUser(employee: Employee) {
    console.log("edit employee:", employee);
  }
  deleteUser(employee: Employee) {


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        this.employeeService.deleteEmployeeById(employee.id)
          .subscribe(data => {
            this.employeeList = this.employeeList.filter(u => u !== employee);
          });
      }
    });


    // if (confirm("Are you sure?")) {
    //   this.employeeService.deleteEmployeeById(employee.id)
    //     .subscribe(data => {
    //       this.employeeList = this.employeeList.filter(u => u !== employee);
    //     });
    // }

  }
}
