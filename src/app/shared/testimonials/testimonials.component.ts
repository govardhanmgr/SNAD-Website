import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TESTIMONIALSComponent implements OnInit {
  slides: NodeListOf<Element> = document.querySelectorAll('.slide-container');
  index: number = 0;

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

  constructor() {}

  ngOnInit(): void {
    // setInterval(this.next(), 7000);
  }
}
