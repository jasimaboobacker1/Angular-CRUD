import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http:HttpClient) { }

  private userapiurl='http://localhost:4000/users';

  Getallusers(){
    return this._http.get(this.userapiurl)
 }

 GetUser(Userid:any){
  return this._http.get(`${this.userapiurl}/${Userid}`)
 }

 AddUser(User:any){
  return this._http.post(this.userapiurl,User)
 }

 Deleteuser(UserId:any){
  return this._http.delete(`${this.userapiurl}/${UserId}`)
 }


  

}
