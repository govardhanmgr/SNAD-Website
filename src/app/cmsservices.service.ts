import { Injectable } from '@angular/core';

import {createClient, Entry} from 'contentful';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CmsservicesService {
private client =createClient({
  space: environment.Abouted.spaceId,
  accessToken: environment.Abouted.token
})
  constructor() { }
   getAbouts(query?: Object): Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type:'about'
    },query))
    .then(res=>res.items);
   }

}
