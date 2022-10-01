import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/icontact';
import { IGroup } from 'src/app/models/igroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
 // public contact: IContact | undefined;
  contact= {} as IContact;
  groups:IGroup[]=[];
  myForm!: FormGroup;

  constructor(private contactService:ContactService,private router:Router,private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      photo: ['', [Validators.required, Validators.required]],
      groupId: ['', [Validators.required, Validators.required]],

    })

   }

  ngOnInit(): void {

    this.contactService.getAllGroups().subscribe(
      (data:IGroup[])=>this.groups=data
    )
    console.log(this.myForm.controls);
    
  }

  get m(){
    console.log(this.myForm.controls);
    return this.myForm.controls;
  }

  get name(): any {
    return this.myForm.get('name');
  }

  createSubmit() {
    
    this.contactService.createContact(this.contact).subscribe(
      (data:IContact)=>{
       this.router.navigate(['/']).then()
      }
    );
  }

}
