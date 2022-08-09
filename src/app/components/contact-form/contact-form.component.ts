import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContactTableComponent} from "../contact-table/contact-table.component";
import {Contact, ContactRequest} from "../../types/Contact";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phoneNumber: ['']
  })


  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<ContactTableComponent>,
              @Inject(MAT_DIALOG_DATA) public contactData: Contact) {

    if(contactData != null)
    {
      // const oldData: Contact = {...contactData}
      this.contactForm.patchValue({
        firstName: contactData.firstName,
        lastName: contactData.lastName,
        email: contactData.email,
        phoneNumber: contactData.phoneNumber
      })
    }

  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.contactForm.value)

    // if(this.contactData == null)
    //   this.dialogRef.close({data: this.getContactRequestData(), action: "ADD"});
    // else
    // {
    //   this.updateContactData()
    //   this.dialogRef.close({data: this.getContactRequestData(), action: "UPDATE"})
    // }

    if(this.contactData == null)
      this.dialogRef.close(this.getContactRequestData());
    else
    {
      this.dialogRef.close(this.getUpdatedContactData());
    }


  }

  private getContactRequestData()
  {
    return {
      firstName: this.contactForm.get("firstName")?.value || "",
      lastName: this.contactForm.get("lastName")?.value || "",
      email: this.contactForm.get("email")?.value || "",
      phoneNumber: this.contactForm.get("phoneNumber")?.value || "",
    }

  }

  private getUpdatedContactData()
  {
      // this.contactData.firstName = this.contactForm.get("firstName")?.value || "";
      // this.contactData.lastName = this.contactForm.get("lastName")?.value || "";
      // this.contactData.email = this.contactForm.get("email")?.value || "";
      // this.contactData.phoneNumber = this.contactForm.get("phoneNumber")?.value || "";

    return {
      id: this.contactData.id,
      firstName: this.contactForm.get("firstName")?.value || "",
      lastName: this.contactForm.get("lastName")?.value || "",
      email: this.contactForm.get("email")?.value || "",
      phoneNumber: this.contactForm.get("phoneNumber")?.value || ""
    }
  }

}
