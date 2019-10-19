import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppInfoService } from './../services/app-info.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
    private router: Router,
    private info: AppInfoService,
  ) { }

  ngOnInit() {
    this.info.logout();
    this.router.navigate(['/login']);
  }

}
