import { Component, OnInit } from '@angular/core';
import { Employee } from '../Interfaces/employee.interface';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // employee = [
  //   {"ID":1,"Emp_name":"Bob Local","City_name":"Surrey","Country_name":"Canada"},
  //   {"ID":2,"Emp_name":"STeve Local","City_name":"Paris","Country_name":"France"},
  //   {"ID":3,"Emp_name":"Jo","City_name":"Calgary","Country_name":"Canada"},
  //   {"ID":4,"Emp_name":"Mary","City_name":"Moscow","Country_name":"Russia"},
  //   {"ID":5,"Emp_name":"Mark","City_name":"Surrey","Country_name":"Canada"},
  //   {"ID":6,"Emp_name":"Daisy","City_name":"Paris","Country_name":"France"}
  // ]

  employees:Employee [] = []



  constructor(private es:EmployeesService) { }

  ngOnInit(): void {
    this.es.getAllEmployees().subscribe( employees => {
      console.log(employees);
      this.employees = employees;
    })
  }

}
