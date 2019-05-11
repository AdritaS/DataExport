import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  employeeList: any = [
    { employeeId: 101, employeeName: "Adrita Sharma", doj: "01-02-2016", highestQualification: "Graduation" },
    { employeeId: 102, employeeName: "Deepika Das", doj: "01-02-2016", highestQualification: "Post Graduation" },
    { employeeId: 103, employeeName: "Ankita Sarkar", doj: "01-02-2016", highestQualification: "Diploma" },
    { employeeId: 104, employeeName: "Drishani Dey", doj: "01-02-2016", highestQualification: "Higher Secondary" },
    { employeeId: 105, employeeName: "Priya Das", doj: "01-02-2016", highestQualification: "Matriculation" }
  ]

  ngOnInit() {
  }

}
