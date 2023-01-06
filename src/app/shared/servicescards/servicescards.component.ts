import { Component,Input,OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { WebflowserviceService } from 'src/app/services/webflowservice.service';

@Component({
  selector: 'app-servicescards',
  templateUrl: './servicescards.component.html',
  styleUrls: ['./servicescards.component.css']
})
export class ServicescardsComponent implements OnInit {
 

  constructor(private router: Router,
    private webflow: WebflowserviceService) { }
    @Input() service!:any

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
   
  }

}
