import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SibComService {
  staticData = new Subject();

  constructor() {}

  sendData(msg: any) {
    this.staticData.next(msg);
  }
}
