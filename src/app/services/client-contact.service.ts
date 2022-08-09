import {Injectable, Output, EventEmitter} from '@angular/core';
import {Contact, ContactRequest} from "../types/Contact";
import {ClientContactAPIService} from "./client-contact-api.service";

@Injectable({
  providedIn: 'root'
})
export class ClientContactService {

  @Output() newContactArrived: EventEmitter<any> = new EventEmitter<any>()

  private contacts: Contact[] = []

  constructor(private clientContactsApiService: ClientContactAPIService) {
  }

  public getAllContacts() {
    this.clientContactsApiService.getAllContacts().subscribe(
      (data: any) => {
        this.contacts = data.map((data: any) => data as Contact)
        this.newContactArrived.emit(this.contacts)
      },
      (error: any) => console.error(error),
      () => console.info("get all contacts done")
    )
  }

  getContactById(id: number)
  {
    return this.clientContactsApiService.getContactById(id);
  }

  public addNewContact(newContact: ContactRequest) {
    this.clientContactsApiService.addNewContact(newContact).subscribe(
      (data: any) => {
        this.contacts.push(data)
        this.newContactArrived.emit(this.contacts)
      },
      (error: any) => console.error(error),
      () => console.info("get all contacts done")
    )
  }

  public updateContact(contactToUpdate: Contact) {
    this.clientContactsApiService.updateContact(contactToUpdate).subscribe(
      (data: any) => {
        const index = this.contacts.findIndex((con: Contact) => con.id == contactToUpdate.id);
        this.contacts[index] = contactToUpdate;
        this.newContactArrived.emit(this.contacts)
      },
      (error: any) => console.error(error),
      () => console.info("get all contacts done")
    )
  }

  public deleteContact(contactToDelete: Contact)
  {
    this.clientContactsApiService.deleteContact(contactToDelete).subscribe(
      (data: any) => {
        const index = this.contacts.findIndex((con: Contact) => con.id == contactToDelete.id);
        this.contacts.splice(index,1)
        this.newContactArrived.emit(this.contacts)
      },
      (error: any) => console.error(error),
      () => console.info("get all contacts done")
    )
  }


}
