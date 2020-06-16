import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { from } from 'rxjs';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  tittle = "Employeee Insert";
  angForm: any;
  routeValue: number;
  buttonText = "Insert";
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private employeeService: EmployeeService) {

  }
  ngOnInit() {
    this.createFrom();
    this.routeValue = this.route.snapshot.params.id;
    console.log("param : ", this.route.snapshot.params.id);
    if (this.routeValue != null) {
      this.buttonText = "Update";
      this.getEmployee(this.routeValue);
    }
  }

  createFrom() {
    // can controll validation fron component also
    this.angForm = this.fb.group({
      id: Number,
      name: ["", Validators.required],
      gender: ["", Validators.required],
      dob: [],
      country: ["", Validators.required],
      city: ["", Validators.required],
      image: [""],
      isActive: [""]

    });
  }

  onFormSubmit() {

    this.CreateEmployee(this.angForm.value);

  }

  CreateEmployee(employee: Employee) {
    alert("cliceked!");
    if (this.routeValue != null) {  // update
      this.employeeService.updateEmployee(employee).subscribe(
        (result) => {
          console.log("result:", result);
          alert("updated successfully!");
          // this.angForm.reset();
        }
      );
    } else { // Insert

      alert("Insert");
      console.log(employee);
      this.employeeService.createEmployee(employee).subscribe(
        (result) => {
          console.log("result:", result);
          this.router.navigate(['/employee/edit/', result.id]);
          alert("added successfully!");
          this.angForm.reset();
        }
      );
    }

  }

  getEmployee(id: number) {
    console.log("get ID: ", id);
    this.employeeService.getEmployeeById(id).subscribe(
      (result) => {
        console.log(result);
        this.angForm.setValue(result);
      }
    );
  }

}
