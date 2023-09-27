import { CanActivateFn } from "@angular/router";

export const authGuard:CanActivateFn=()=>{
  
  return localStorage.getItem('auth')?true:false;
}

