import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreventafterloginGuard implements CanActivate {
  constructor( private router:Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    let ans_storage = localStorage.getItem("uname");
      if(ans_storage===null){
        this.router.navigate(['/loginformpage'])
        return false;
      }
      else{
        return true;
      }
  }
  
}
