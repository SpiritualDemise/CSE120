import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  authSt = new BehaviorSubject(false);

  constructor(
    public info: Storage,
    private platform: Platform,
    public toastController: ToastController,
    private router: Router
  ) {
    this.platform.ready().then(()=> {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.info.get("loggedIn").then((response) => {
      if(response) {
        this.authSt.next(true);
      }
    });
  }

  login() {
    this.info.set("loggedIn", true).then((response) => {
      this.authSt.next(true);
      this.router.navigate(['/tabs/home']);
    });
  }

  logout() {
    this.info.set("loggedIn", false).then(() => {
      this.authSt.next(false);
      this.router.navigate(['/login']);
    });
  }

  isAuthenticated() {
    return this.authSt.value;
  }

  async traverse():Promise<any> {
    return await new Promise<any>((resolve) => {
      this.info.forEach((value, key:string) => {
        console.log("key: " + key);
        console.log("value: " + JSON.stringify(value));
      });
    });

  }
}
