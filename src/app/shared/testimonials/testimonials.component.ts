import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component,  Input, OnInit } from '@angular/core';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';
import { Subscription } from 'rxjs';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TESTIMONIALSComponent implements OnInit, AfterViewInit {
  @Input() testimonial!: any
  slides!: NodeListOf<Element>
  index: number = 0;
  subscription!: Subscription;
 

  next() {
    this.slides[this.index].classList.remove('active');

    this.index = (this.index + 1) % this.slides.length;
    this.slides[this.index].classList.add('active');
  }

  prev() {
    this.slides[this.index].classList.remove('active');
    this.index = (this.index - 1 + this.slides.length) % this.slides.length;
    this.slides[this.index].classList.add('active');
  }

  constructor( private webflow: WebflowserviceService) { }
  ngOnInit(): void {
    setInterval(() => {

      this.next()

    }, 7000);
    console.log(this.testimonial);
   

  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  ngAfterViewInit(): void {

    this.slides = document.querySelectorAll('.slide-container');
  }
  


}

