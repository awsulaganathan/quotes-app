import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(private navParams: NavParams, private alertCtrl: AlertController ){
}
//Add elvis operator (?) in template to use this approach
// ionViewDidLoad(){
//   this.quoteGroup = this.navParams.data;
// }
ngOnInit(){
  this.quoteGroup = this.navParams.data;
}
  onAddToFavorite(){
    let prompt = this.alertCtrl.create({
      title: 'Add Quote',
      message: "Are you sure you want to add quote",
      buttons: [
        {
          text: 'Yes',
          handler: () => { 
            console.log('yes');
          }
        },
        {
          text: 'No',
          role:'cancel',
          handler: () => {
            console.log('No');
          }
        }
      ]
    });
    prompt.present();
  }
}
