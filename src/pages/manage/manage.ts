import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { AppService } from '../../app/app.service';

import $ from 'jquery';

@Component({
  selector: 'manage-home',
  templateUrl: 'manage.html'
})
export class ManagePage {

  loading:any;
  capchaCode:string;

  constructor(public navCtrl: NavController,
    private appService: AppService,
    public loadingCtrl: LoadingController) {

      this.loading = this.loadingCtrl.create({
    content: 'Please waittttttttt...'
  })

    this.getLoginPage();
  }

  presentLoading() {
  this.loading.present();
  
  }

  getLoginPage(): void {
    this.presentLoading();
    this.appService
      .getWebpage()
      .then(data => {
        var dataHtml = $.parseHTML( data )
        console.log($(dataHtml).find(".capcha").text())
        this.capchaCode = $(dataHtml).find(".capcha").text();
        this.loading.dismiss();
      });
  }

login():void{
      this.appService
.callPost('http://tnocmms.nic.in/OCMMS/userMaster/doLogin', {
    radioButton:'Industry',
  userId:'R15PND2258168',
  password:'9e6d3109fa696532e61dc821b2f3ff8a',
  captchaCode:this.capchaCode
})
      .then(data => {
        console.log(data)
      });
  }

}
