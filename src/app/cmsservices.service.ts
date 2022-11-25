import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CmsservicesService {
  // Abouted = environment.Abouted;

  private client = createClient({
    space: environment.Abouted.spaceId,
    accessToken: environment.Abouted.token,
  })
  private Bloged = createClient({
    space: environment.Blog.spaceId,
    accessToken: environment.Blog.token
  })
  constructor() { }


  getAbouts(query?: Object): Promise<Entry<any>[]> | any {
    return this.client.getEntries(Object.assign({
      content_type: 'about'
    }, query))
      .then(res => res.items);
  }
  getOurpeoples(query?: Object): Promise<Entry<any>[]> | any {
    return this.client.getEntries(Object.assign({
      content_type: 'ourpeople'
    }, query))
      .then(res => res.items);
  }
  //  getBlogs(query?:Object): Promise<Entry<any>[]>{
  //   return this.client.getEntries(Object.assign({
  //     content_type:''
  //   },query))
  //   .then(res=>res.items);
  //  }
}


