import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subservices',
  templateUrl: './subservices.component.html',
  styleUrls: ['./subservices.component.css']
})
export class SubservicesComponent implements OnInit {


  @Input() serviceDetails!:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.serviceDetails);

  }

}
