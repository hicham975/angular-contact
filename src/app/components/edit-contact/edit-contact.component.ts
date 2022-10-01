import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/models/icontact';
import { IGroup } from 'src/app/models/igroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contact!:IContact;
  groups:IGroup[]=[];
  contact_id= this.activeroute.snapshot.paramMap.get('contactId');


 


  constructor(private contactService:ContactService,private activeroute:ActivatedRoute, private router:Router) { }


  ngOnInit(): void {



    this.contactService.getAllGroups().subscribe(
      (data:IGroup[])=>this.groups=data
    )
    if(this.contact_id){

    this.contactService.getSingleContacts(this.contact_id).subscribe(
      (data:IContact)=>{
        this.contact=data;
      }
    )
    }

    
  }

  updateSubmit() {
if(this.contact_id){

  this.contactService.updateContact(this.contact,this.contact_id).subscribe(
    (data:IContact)=>{
     this.contact=data, 
     this.router.navigate(['/']).then()
    }
  );
}

  }
}
