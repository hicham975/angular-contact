import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { IContact } from '../models/icontact';
import { IGroup } from '../models/igroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string="http://localhost:3000";

  constructor(private http:HttpClient) { }


// get all contacts

  public getAllContacts(): Observable<IContact[]> {

    let dataUrl=`${this.serverUrl}/contacts`;

    return this.http.get<IContact[]>(dataUrl);


  }

  // get single contact

  public getSingleContacts(idContact: string): Observable<IContact>{


    let dataUrl=`${this.serverUrl}/contacts/${idContact}`;

    return this.http.get<IContact>(dataUrl);


  }

  // create contact


  public createContact(contact: IContact): Observable<IContact>{

    let dataUrl=`${this.serverUrl}/contacts`;
    return this.http.post<IContact>(dataUrl,contact);
  }


    // update contact


    public updateContact(contact: IContact,idContact:string): Observable<IContact>{

      let dataUrl=`${this.serverUrl}/contacts/${idContact}`;
      return this.http.put<IContact>(dataUrl,contact);
    }


    
    // delet contact


    public deleteContact(idContact?:string): Observable<{}>{

      let dataUrl=`${this.serverUrl}/contacts/${idContact}`;
      return this.http.delete<{}>(dataUrl);
    }


// get all groups

public getAllGroups(): Observable<IGroup[]> {

  let dataUrl=`${this.serverUrl}/groups`;

  return this.http.get<IGroup[]>(dataUrl);


}


  // get single group

  public getSingleGroup(contact: IContact): Observable<IGroup>{


    let dataUrl=`${this.serverUrl}/groups/${contact.groupId}`;

    return this.http.get<IGroup>(dataUrl);


  }




}
