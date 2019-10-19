import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppInfoService } from './app-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public info: AppInfoService) {}

  canActivate(): boolean {
    return this.info.isAuthenticated();
  }

}
