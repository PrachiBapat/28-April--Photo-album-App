import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = "http://localhost:4400/employeesapi";
  urlsp = "http://localhost:4400/employeessp";

  constructor(private eshttp:HttpClient) { }

  getAllEmployees(){
    return this.eshttp.get<Employee[]>(this.urlsp); // This will return the Observable
  }

}
