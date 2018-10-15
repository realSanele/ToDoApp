import { TASKLIST } from './../../mocks/task.mocks';
import { TaskAddPage } from './../task-add/task-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-view',
  templateUrl: 'task-view.html',
})
export class TaskViewPage {
  taskList = TASKLIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskViewPage');
  }

  addTask(){
    this.navCtrl.push(TaskAddPage);
  }

}
