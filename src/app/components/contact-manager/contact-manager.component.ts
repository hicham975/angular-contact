import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/models/icontact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  loading:boolean=true;
  contacts:IContact[]=[];
  errorMessage!:string;
  

  constructor(private contactService:ContactService,private router:Router) { }

  ngOnInit(): void {

    this.getAllContactsFromServer();
  }

  getAllContactsFromServer(){

    this.contactService.getAllContacts().subscribe(
      (data:IContact[])=>{
        this.contacts=data;
        this.loading=false;
      }     
      )
  }


  deleteContactmanager(idcontact?: string){
  if(idcontact){
    this.contactService.deleteContact(idcontact).subscribe(
    ()=>{
      this.getAllContactsFromServer()

    }
  );
}



  }

  // run json seerver: json-server --watch db.json

}
