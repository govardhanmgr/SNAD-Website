import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebflowserviceService {

  Apiurl = environment.Apiurl;
  constructor(private http:HttpClient) { }
  getData(url:string){
    return this.http.get(`${this.Apiurl}${url}`);
  }
}
