import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ICdetails } from './cDetails-model';

import * as Aos from 'aos';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactformd = {} as ICdetails;
  a = true;
  b = false;

  succes = {} as any;

  errors = {} as any;

  constructor() {}

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    });
  }

  showform() {
    this.a = true;
    this.b = false;
  }

  contactSubmit(f: NgForm) {
    if (f.value == f.value) {
      this.a = false;

      this.b = true;
    } else {
    }

    console.log(f.value);
  }
}
