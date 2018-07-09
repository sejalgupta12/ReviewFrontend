import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router,private user:UserService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.auth.isLoggedIn){
    return true;
  }
  return this.user.isLoggedIn().pipe(map(res=>{
    if(!res.status)
    {
      this.auth.setLoggedIn(true)
      return true;
    }
    else{
      this.router.navigate([''])
      return false
    }
  }))
}
}
