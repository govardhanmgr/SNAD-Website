import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ICdetails } from './cDetails-model';

import * as Aos from 'aos';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactformd = {} as ICdetails;

  constructor() {}

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    });
  }

  contactSubmit(f: NgForm) {
    console.log(f.value);
  }
}
