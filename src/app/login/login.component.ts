import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { myToken, Payload } from '../token';
import { AuthServiceService } from '../Auth/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public username : string
  private password : string
  
  private test:string
  private isAuthed: boolean
  

  constructor(private http:HttpClient,
              private router:Router,
              private auth:AuthServiceService) { }

  ngOnInit() {
    this.username ="";
    this.password="";

    this.isAuthed = this.auth.isAuthenticated() 
        if(!this.isAuthed){
          this.test = "Please log in!"
        }
        if(this.isAuthed){
          this.test = "already logged in"
          }
    
  }
 
  
  
  /**
   * Login / gets the webtoken
   */
  public Login() {
    this.auth.Login(this.username,this.password)
   window.alert("logged in")
   this.router.navigate(['/movie-list'])
  }
  public backupPayload(){
    window.localStorage.setItem('BackupPayload',"eyJpc3MiOiAiTG9jYWwiLCJhdWQiOiAiTG9jYWwiLCJleHAiOiAiMjgtMDUtMjAxOCAxNzoyMTo0MCIsIkNJRCI6ICJkYW5pZWwifQ")
  }
  public Logout(){
    this.auth.Logout()
    this.router.navigate(['/movie-list'])
  }
}
