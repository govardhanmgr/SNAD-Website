import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent implements OnInit {

  @Input() getintouch!:any

  constructor() { }

  ngOnInit(): void {
  }

}
