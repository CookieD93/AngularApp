import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { AuthServiceService } from '../Auth/auth-service.service';


@Injectable()
export class AuthGuardService {

  constructor( public auth : AuthServiceService, public router : Router) { }

  canActivate() : Boolean {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
