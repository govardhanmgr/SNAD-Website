import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { WebflowserviceService } from './webflowservice.service';

@Injectable({
  providedIn: 'root',
})
export class SibComService {
  staticData = new Subject();
  subscription!: Subscription

  constructor(
    private webflow: WebflowserviceService
  ) { }

  sendData(msg: any) {
    this.staticData.next(msg);
  }
  public myData: any

  getReferenceCollections(element: any) {
    if (element['ref-collections']) {
      let rep: Array<string> = element['ref-collections'];
      let refres = new Array();
      rep.forEach(async (el) => {
        this.getReferenceData(el, refres);
      });
      element.refdata = refres;
      // this.getReferenceData(rep)
    }
  }

  getReferenceData(itemId: string, res?: any) {
    this.subscription = this.webflow
      .getData(`referenceitembyid/${itemId}`)
      .subscribe({
        next: (response: any) => {
          res.push(response.data);
        },
        error: (reason: any) => {
          console.error(reason);
        },
      });
  }



}
