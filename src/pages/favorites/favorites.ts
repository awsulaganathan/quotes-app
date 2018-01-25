import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { quoteService } from '../../services/quote';


@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

quotes : Quote[];  

constructor(private quoteServices : quoteService){}
ionViewWillEnter(){
  this.quotes = this.quoteServices.getFavoriteQuotes();
}
  //onRemoveFromFavorite(quote){
    //console.log(quote);
    //this.quoteServices.removeQuoteFromFavorites(quote);
  //}

}
