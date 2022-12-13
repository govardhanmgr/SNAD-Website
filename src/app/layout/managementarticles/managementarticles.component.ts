import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-managementarticles',
  templateUrl: './managementarticles.component.html',
  styleUrls: ['./managementarticles.component.css']
})
export class ManagementarticlesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init({
      duration: 500,
    })
  }

}
