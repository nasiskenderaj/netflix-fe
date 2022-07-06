import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {RegisterComponent} from "../auth/auth/register/register.component";

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<any> {
  canDeactivate(component: RegisterComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  if(component.userFormGroup.valid){
    return true;
  }
    if (confirm('all your data will be lost, do you want to procced')){
      return true;
    }
    return false;
  }

}
