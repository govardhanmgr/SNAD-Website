import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subservice',
  templateUrl: './subservice.component.html',
  styleUrls: ['./subservice.component.css']
})
export class SubserviceComponent implements OnInit {

  impactfullnumbers={} as any
  constructor() { }

  ngOnInit(): void {
    this.impactfullnumbers={
      shorttext: "We have impactfull Numbers",
      numbers: [
        {
          shortnumber: "98",
          icon: "%",
          text: "Customer satisfaction"
        },
        {
          shortnumber: "205",
          icon: "M",
          text: "Monthly active users"
        },
        {
          shortnumber: "100",
          icon: "K",
          text: "New users per week"
        },
        {
          shortnumber: "55",
          icon: "%",
          text: "Growth year-over-year"
        },
      ]
    }
  }

}
