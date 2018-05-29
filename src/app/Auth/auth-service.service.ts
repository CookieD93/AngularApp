import { Injectable } from '@angular/core';
import { myToken, Payload } from '../token';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';

@Injectable()
export class AuthServiceService {

  public payload : Payload = {iss :"",aud:"",exp: "27-05-2018 23:47:55",CID:""}
  public token :myToken = {Token : "", payload : this.payload}
  encodedpayload :string
  backupPayload :string
  private splitToken : string[]
  

  constructor(private http:HttpClient) { }

  public getToken(username:string,password:string) : Observable<myToken>{
    return  this.http.get<myToken>("http://localhost:22595/Service1.svc/Users/login/"+username+"/"+password).map(response => response);
      }
  public isAuthenticated(): boolean{
    this.encodedpayload = window.localStorage.getItem('tokenPayload')
    this.backupPayload = window.localStorage.getItem('BackupPayload')
    if(this.encodedpayload!==null){
          // this.payload = JSON.parse(window.atob(this.encodedpayload.replace('-','+').replace('_','/')))
      }   

    if(this.backupPayload!==null){
      // Use the version below if getting DomException, Error is caused by window.atop() can't handle the utf8 properly need to fix sometime
      this.payload = JSON.parse(window.atob(this.backupPayload.replace('-','+').replace('_','/')))
      }
    
    if(this.encodedpayload!==null ||this.backupPayload!==null){
          return this.payload.exp>new Date().toTimeString()
    }
    return false

  }
  public Login(username:string, password:string){
    this.getToken(username,password).subscribe(response => this.token = response)
    this.splitToken = this.token.Token.split(".")
    window.localStorage.setItem('token',this.token.Token)
    window.localStorage.setItem('tokenHeader',this.splitToken[0])
    window.localStorage.setItem('tokenPayload',this.splitToken[1])
    window.localStorage.setItem('tokenSignature',this.splitToken[2])
  }
  public Logout(){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('tokenHeader')
    window.localStorage.removeItem('tokenPayload')
    window.localStorage.removeItem('tokenSignature')
    window.localStorage.removeItem('BackupPayload')
  }
}
