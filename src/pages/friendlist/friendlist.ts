import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FriendrestProvider } from '../../providers/friendrest/friendrest';
import { FrienddetailPage } from '../frienddetail/frienddetail';
import { Friend } from '../../moduls/friendmodul';



@Component({
  selector: 'page-friendlist',
  templateUrl: 'friendlist.html',
})
export class FriendlistPage {

  major:String;
  friends:Friend;

  constructor(private friendrest: FriendrestProvider ,public navCtrl: NavController, public navParams: NavParams){
  }

  

  ionViewWillEnter(){
    this.major=this.navParams.get("studentID");
    this.friendrest.getFriendList().subscribe( date =>{
    this.friends=date.filter(friend=> friend.category === this.major);
     });
  }
  ionViewDidLoad(){
    console.log('ionViewDidLoad ListFriendPage');
  }
  gotoBack(){
    this.navCtrl.pop();
  }
  showDetail(studentID:string){
    this.navCtrl.push(FrienddetailPage,
      {studentID:studentID}
      );
  }

}
