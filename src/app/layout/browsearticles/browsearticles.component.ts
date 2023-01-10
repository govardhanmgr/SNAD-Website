import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-browsearticles',
  templateUrl: './browsearticles.component.html',
  styleUrls: ['./browsearticles.component.css']
})
export class BrowsearticlesComponent implements OnInit {

@Input() blog!:any 

 
  constructor() { }

  ngOnInit(): void {
    console.log(this.blog);
    
  }

}
