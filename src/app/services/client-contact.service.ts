import { Injectable, Output, EventEmitter } from '@angular/core';
import {Contact} from "../types/Contact";
import {ClientContactAPIService} from "./client-contact-api.service";

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  @Output() newContactArrived: EventEmitter<any> = new EventEmitter<any>()

  private contacts: Contact[] = []

  constructor(private clientContactsApiService: ClientContactAPIService) { }

  public getAllContacts()
  {
    this.clientContactsApiService.getAllContacts().subscribe(
      (data: any) => {
        this.contacts = data.map((data: any) => data as Contact)
        this.newContactArrived.emit(this.contacts)
      },
      (error: any) => console.error(error),
      () => console.info("get all contacts done")
    )
  }




}
