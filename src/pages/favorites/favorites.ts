import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { quoteService } from '../../services/quote';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

quotes : Quote[];  

constructor(private quoteServices : quoteService,
            private modalCtrl:ModalController){}
ionViewWillEnter(){
  this.quotes = this.quoteServices.getFavoriteQuotes();
}
  onRemoveFromFavorite(quote: Quote){
    this.quoteServices.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteServices.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage,quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) =>{
      if (remove){
        this.onRemoveFromFavorite(quote);
      }
    });
  }
}
