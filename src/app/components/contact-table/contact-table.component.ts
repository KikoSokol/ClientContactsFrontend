import { Component, OnInit } from '@angular/core';
import {ClientContactService} from "../../services/client-contact.service";
import {Contact} from "../../types/Contact";



@Component({
  selector: 'contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  contacts: Contact[] = []
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber'];

  constructor(private contactService: ClientContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts();
    this.contactService.newContactArrived.subscribe(data => {
      this.contacts = data;
      console.log(this.contacts)
    })
  }

}
