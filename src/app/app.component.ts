import { Component } from '@angular/core';
import { Cocktail } from './cocktail';
import { CocktailServiceService } from './cocktail-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CocktailService';
  cocktails :Cocktail[]=[]
  
}

