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
  
  private test
  private isAuthed: boolean
  
  // // private payload : Payload
  // private backupPayloads :string
  // private timestring : string

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

    // this.backupPayloads = window.localStorage.getItem('token')
    // this.test = this. backupPayloads
    // this.backupPayloads.replace('-','+').replace('_','/')
    //       this.test = JSON.parse(window.atob(this.backupPayloads))
    // if(this.backupPayload!==null){
    //   // Use the version below if getting DomException, Error is caused by window.atop() can't handle the utf8 properly need to fix sometime
    //   this.payload = JSON.parse(window.atob(this.backupPayloads.replace('-','+').replace('_','/')))
    //   }
      //28-05-2018 17:21:40
      //this.payload.exp
    //  this.test = new Date("05-28-2018 17:21:40") //> new Date()
    //  this.timestring = new Date();

  }
 
  
  
  /**
   * Login / gets the webtoken
   */
  public Login() {
    this.auth.Login(this.username,this.password)
   this.router.navigate(['/movie-list'])
  }
  //gemmer en backup payload som er gyldig indtil 19. juni.
  public backupPayload(){
    window.localStorage.setItem('BackupPayload',"eyJpc3MiOiJMb2NhbCIsImF1ZCI6IkxvY2FsIiwiZXhwIjoianVuLiAxOSwgMjAxOCAxNzo1MzoxOCIsIkNJRCI6ImRhbmllbCJ9")
  }
  public Logout(){
    this.auth.Logout()
    this.router.navigate(['/movie-list'])
  }
}
