import { Component } from '@angular/core';
import { ViewController,NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  quote:Quote;
  person : string;
  text:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl: ViewController) {
  }
  ionViewDidLoad(){
    this.quote = this.navParams.data;
    this.person = this.quote.person;
    this.text = this.quote.text;
  }
  onClose(remove=false){
  this.viewCtrl.dismiss(remove);
  }
}
