import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ICdetails } from './cDetails-model';

import * as Aos from 'aos';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { SibComService } from 'src/app/services/sib-com.service';
import { TitleStrategy } from '@angular/router';

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
  heroimage = {} as any;
  cont = {} as any;
  contact = {} as any;
  impactfull = {} as any;

  constructor(private sibservice:SibComService) {}

  ngOnInit(): void {
    Aos.init({
      duration: 1200,
    });
    this.getStaticContent();
  }

  showform() {
    this.a = true;
    this.b = false;
  }

  getStaticContent(){
    let data:any = JSON.parse(localStorage.getItem("staticcontent") || '[]');
    console.log(data);
    let herodata= data.filter((el: { page: string; sections:string;}) => el.page === 'fda423fea0883197aaf568a4486f8666' && el.sections === '1af9e7b1f68df63d6d09988bd947b2f8');
    this.heroimage=herodata[0]
    console.log(this.heroimage);
    let contactdetails =data.filter((el:{page:string;sections:string;})=> el.page ==='fda423fea0883197aaf568a4486f8666' &&el.sections ==='4d7baaac9222de6d478029bd560e6112');
    this.contact=contactdetails[0]
    this.sibservice.getReferenceCollections(this.contact)
    console.log(this.contact);
    let impactfullnumbers = data.filter((el:{page:string; sections: string;})=> el.page ==='fda423fea0883197aaf568a4486f8666' && el.sections === '8808845a39d7b7b5ca84bdd8458f738a' );
    this.impactfull=impactfullnumbers[0]
    this.sibservice.getReferenceCollections(this.impactfull)
    console.log(this.impactfull);
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
