import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppInfoService } from './../services/app-info.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menuCtrl: MenuController,
    private info: AppInfoService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.info.getLogIn().then((val) => {
    //   if(val) {
    //     this.goToHomePage();
    //   }
    // });
    this.menuCtrl.enable(false);
  }

  ngOnDestroy() {
    this.menuCtrl.enable(true);
  }

  login() {
    this.info.login();
    // this.goToHomePage();
  }

  print() {
    this.info.traverse();
  }

  goToHomePage() {
    this.router.navigate(['/tabs/home']);
  }
}
