import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Entry } from 'contentful';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
