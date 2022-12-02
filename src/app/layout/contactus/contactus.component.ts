import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  repeatpass: string = 'none';
  constructor() {}

  ngOnInit(): void {}

  contactForm = new FormGroup({
    firstname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    organisation: new FormControl(''),
    country: new FormControl(''),
    service: new FormControl(''),
    suggestion: new FormControl(''),
    message: new FormControl(''),
  });

  contactSubmit() {}
}
