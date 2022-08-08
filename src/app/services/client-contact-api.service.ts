import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientContactAPIService {

  constructor(private httpClient: HttpClient) {

  }

  private baseUrl: string = "/api/";

  private allContactUrl: string = this.baseUrl + "contact"


  getAllContacts()
  {
    const url: string = this.allContactUrl.replace(/\s/g, '');
    return this.httpClient.get(url);
  }
}
