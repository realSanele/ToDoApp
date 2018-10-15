
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TaskViewPage } from '../task-view/task-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.presentLoadingText();
  }

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      //spinner: 'hide',
      content: 'Loading scheduled task(s). Please Wait...'
    });
  
    loading.present();
  
   
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);

    setTimeout(() => {
      this.navCtrl.setRoot(TaskViewPage);
    }, 5000);
  }

}
