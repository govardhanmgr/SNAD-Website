import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-impactfullnumbers',
  templateUrl: './impactfullnumbers.component.html',
  styleUrls: ['./impactfullnumbers.component.css']
})
export class ImpactfullnumbersComponent implements OnInit {

  @Input() numbers!:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.numbers);
  }

}
