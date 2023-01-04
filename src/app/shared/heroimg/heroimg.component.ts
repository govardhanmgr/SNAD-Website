import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroimg',
  templateUrl: './heroimg.component.html',
  styleUrls: ['./heroimg.component.css']
})
export class HeroimgComponent implements OnInit {

  @Input() heros!:any

  constructor() { }

  ngOnInit(): void {
    console.log(this.heros);
    
  }

}
