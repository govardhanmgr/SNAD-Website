import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-jobrequirment',
  templateUrl: './jobrequirment.component.html',
  styleUrls: ['./jobrequirment.component.css']
})
export class JobrequirmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
  }

}
