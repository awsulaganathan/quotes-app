import { Quote } from "../data/quote.interface";

export class quoteService{
    private favoriteQuotes:Quote[]=[];

    addQuoteToFavorites(quote : Quote){
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }
    removeQuoteFromFavorites(quote: Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote) =>{
              return   quoteEl.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }
    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

}