
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Employee } from '../models/employee';
import { HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../models/config';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Employee>(baseUrl + '/api/employees', employee, httpOptions);
  }

  updateEmployee(employee: Employee) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.put<Employee>(baseUrl + '/api/employees/' + employee.id, employee, httpOptions);
  }
  getAllEmployeeList() {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.get(baseUrl + '/api/employees', httpOptions);
  }

  getEmployeeById( id: number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.get(baseUrl + '/api/employees/' + id, httpOptions);
  }

  deleteEmployeeById( id: number) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.delete(baseUrl + '/api/employees/' + id, httpOptions);
  }
}

