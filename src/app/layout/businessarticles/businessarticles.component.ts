import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-businessarticles',
  templateUrl: './businessarticles.component.html',
  styleUrls: ['./businessarticles.component.css']
})
export class BusinessarticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init({
      duration: 500,
    })

  }

}
