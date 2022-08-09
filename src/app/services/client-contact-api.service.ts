import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Contact, ContactRequest} from "../types/Contact";

@Injectable({
  providedIn: 'root'
})
export class ClientContactAPIService {

  constructor(private httpClient: HttpClient) {

  }

  private baseUrl: string = "/api/contact";

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  public getAllContacts()
  {
    const url: string = this.baseUrl.replace(/\s/g, '');
    return this.httpClient.get(url);
  }

  public getContactById(id: number)
  {
    const url: string = `${this.baseUrl}/${id}`

    return this.httpClient.get(url);
  }

  public addNewContact(newContact: ContactRequest)
  {
    const url: string = this.baseUrl.replace(/\s/g, '');

    return this.httpClient.post(url, newContact, this.httpOptions)
  }

  public updateContact(contactToUpdate: Contact)
  {

    const url: string = `${this.baseUrl}/${contactToUpdate.id}`

    return this.httpClient.put(url,contactToUpdate,this.httpOptions)
  }

  public deleteContact(contactToDelete: Contact)
  {
    const url: string = `${this.baseUrl}/${contactToDelete.id}`

    return this.httpClient.delete(url)
  }


}
