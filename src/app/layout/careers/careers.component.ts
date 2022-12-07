import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
 
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  
  constructor() { }

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    })
  }

}
