import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestarticles',
  templateUrl: './latestarticles.component.html',
  styleUrls: ['./latestarticles.component.css']
})
export class LatestarticlesComponent implements OnInit {

  @Input() latest!:any
  constructor() { }

  ngOnInit(): void {
  }

}
