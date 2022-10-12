import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {
  constructor() { }
  cocktails: Cocktail[] =[
    {
      name: 'Virgin Mojito',
      prix: 13,
      image: 'https://scally.typepad.com/.a/6a00d8341c676f53ef01a511f5fca8970c-pi'
    },
    {
      name: 'Bloody Mary',
      prix: 13,
      image: "https://cocktailcorner.fr/wp-content/uploads/2021/03/Bloody-Mary-1024x683.jpg"
    },
    {
      name: 'blue lagoon',
      prix: 14,
      image: "https://www.acouplecooks.com/wp-content/uploads/2021/03/Blue-Lagoon-Cocktail-007s.jpg"
    },
    {
      name: 'Six on the beach',
      prix: 16,
      image: "https://www.cocktailmag.fr/media/k2/items/cache/7293a47c0f4cdddd46ff10bcf3d23287_XL.jpg"
    }
    
    
  ]
  
  getCoktails(): Cocktail[] {
    return  this.cocktails
  } 
}

