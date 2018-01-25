import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { quoteService } from '../../services/quote';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(private navParams: NavParams, 
    private alertCtrl: AlertController,
    private quoteService :quoteService ){
}
//Add elvis operator (?) in template to use this approach
// ionViewDidLoad(){
//   this.quoteGroup = this.navParams.data;
// }
ngOnInit(){
  this.quoteGroup = this.navParams.data;
}
  onAddToFavorite(quote:Quote){
    let prompt = this.alertCtrl.create({
      title: 'Add Quote',
      message: "Are you sure you want to add quote",
      buttons: [
        {
          text: 'Yes',
          handler: () => { 
            this.quoteService.addQuoteToFavorites(quote);
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
