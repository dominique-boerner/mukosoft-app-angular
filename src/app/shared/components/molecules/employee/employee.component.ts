import { Component, Input, OnInit } from "@angular/core";
import { Employee } from "../../../../models/my-doc/Employee";

@Component({
  selector: "muko-employee",
  templateUrl: "./employee.component.html",
})
export class EmployeeComponent {
  @Input() employee: Employee = {};
}