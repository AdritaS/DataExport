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
    { employeeId: 102, employeeName: "Deepika Das", doj: "21-07-2014", highestQualification: "Post Graduation" },
    { employeeId: 103, employeeName: "Ankita Sarkar", doj: "14-12-2015", highestQualification: "Diploma" },
    { employeeId: 104, employeeName: "Drishani Dey", doj: "31-05-2015", highestQualification: "Senior Secondary" },
    { employeeId: 105, employeeName: "Priya Bhatt", doj: "20-08-2013", highestQualification: "Matriculation" },
    { employeeId: 106, employeeName: "Tamorita Singh", doj: "16-02-2012", highestQualification: "Graduation" },
    { employeeId: 107, employeeName: "Pooja Mehra", doj: "02-03-2010", highestQualification: "Graduation" },
    { employeeId: 108, employeeName: "Surbhi Kumari", doj: "19-04-2012", highestQualification: "Graduation" },
    { employeeId: 109, employeeName: "Rai Paul", doj: "25-10-2017", highestQualification: "Post Graduation" },
    { employeeId: 110, employeeName: "Ishika Mazumdar", doj: "03-06-2018", highestQualification: "Post Graduation" },
    { employeeId: 111, employeeName: "Rinky Nath", doj: "22-02-2019", highestQualification: "Senior Secondary" },
  ]

  employeeQualificationChart: any = {
    title: 'Employee Qualification',
    type: 'PieChart',
    data: [],
    options: {
      pieHole: 0.4,
    },
    display: false
  }
  ngOnInit() {
    this.createChartData()
  }

  createChartData() {
    const grouped = this.groupBy(this.employeeList, x => x.highestQualification);

    this.employeeQualificationChart.data.push(["Matriculation", grouped.get("Matriculation").length])
    this.employeeQualificationChart.data.push(["Senior Secondary", grouped.get("Senior Secondary").length])
    this.employeeQualificationChart.data.push(["Diploma", grouped.get("Diploma").length])
    this.employeeQualificationChart.data.push(["Graduation", grouped.get("Graduation").length])
    this.employeeQualificationChart.data.push(["Post Graduation", grouped.get("Post Graduation").length])


    this.employeeQualificationChart.display = true
  }

  groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
      const key = keyGetter(item);
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [item]);
      } else {
        collection.push(item);
      }
    });
    return map;
  }

}
