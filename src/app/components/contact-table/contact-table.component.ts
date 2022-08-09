import { Component, OnInit , Inject} from '@angular/core';
import {ClientContactService} from "../../services/client-contact.service";
import {Contact, ContactRequest} from "../../types/Contact";
import {MatDialog} from "@angular/material/dialog";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {MatTableDataSource} from "@angular/material/table";



@Component({
  selector: 'contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  contacts?: MatTableDataSource<Contact>
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phoneNumber', 'actions'];

  constructor(private contactService: ClientContactService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.contactService.getAllContacts();
    this.contactService.newContactArrived.subscribe(data => {
      this.contacts = new MatTableDataSource(data);
      console.log(this.contacts)
    })
  }

  public openAddContactForm(): void
  {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '500px',
      data: null
    });

    dialogRef.afterClosed().subscribe(resultContact => {
      this.addNewContact(resultContact)
    })
  }

  public openUpdateContactForm(contactToUpdate: Contact): void
  {
    this.contactService.getContactById(contactToUpdate.id).subscribe(
      (data: any) => {
        this.openUpdateForm(data);
      },
      (error: any) => console.error(error),
      () => console.info("get all contacts done")
    )

  }

  public openUpdateForm(contactToUpdate: Contact)
  {
    const dialogRef = this.dialog.open(ContactFormComponent, {
      width: '500px',
      data: contactToUpdate
    });

    dialogRef.afterClosed().subscribe(resultContact => {
      this.updateContact(resultContact)
    })
  }

  public addNewContact(newContact: ContactRequest)
  {
    this.contactService.addNewContact(newContact)
  }

  public updateContact(contactToUpdate: Contact)
  {
    this.contactService.updateContact(contactToUpdate)
  }

  public deleteContact(contactToDelete: Contact)
  {
    this.contactService.deleteContact(contactToDelete)
  }

}
