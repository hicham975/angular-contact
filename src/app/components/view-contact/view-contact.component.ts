import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/models/icontact';
import { IGroup } from 'src/app/models/igroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {


  contact!:IContact;

  group!:IGroup;

  constructor(private contactService:ContactService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    const contactId= this.route.snapshot.paramMap.get('contactId')!;

    this.contactService.getSingleContacts(contactId).subscribe(
      (data:IContact)=>{
        this.contact=data,
        this.contactService.getSingleGroup(this.contact).subscribe(
          (data:IGroup)=>this.group=data,
        );
      }      
    );


  }

}
