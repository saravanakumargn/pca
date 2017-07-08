import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';

import { ManagePage } from '../manage/manage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   @ViewChild(Nav) nav: Nav;

  constructor(public navCtrl: NavController) {

  }

  managePageOpen() {
    console.log('managePageOpen')
    this.navCtrl.push(ManagePage);
    // this.nav.setRoot(ManagePage);
  }

}
