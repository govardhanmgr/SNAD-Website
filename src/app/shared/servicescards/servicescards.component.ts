import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicescards',
  templateUrl: './servicescards.component.html',
  styleUrls: ['./servicescards.component.css']
})
export class ServicescardsComponent implements OnInit {

  @Input() service!:any

  constructor() { }

  ngOnInit(): void {
  }

}
