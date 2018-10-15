import { TASKLIST } from './../../mocks/task.mocks';
import { TaskViewPage } from './../task-view/task-view';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-add',
  templateUrl: 'task-add.html',
})
export class TaskAddPage {
  taskName : string;
  date : string;
  time : string;

  //task : Task;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskAddPage');
  }

  add(){
    //this.task = new Task(this.taskName,this.time,this.date);
    /*taskName : string;
    time : string;
    date : string;*/
    TASKLIST.push({taskName : this.taskName, time: this.time, date : this.date});
    
    //this.navCtrl.push(TaskViewPage);
      this.navCtrl.setRoot(TaskViewPage);
  }

}
