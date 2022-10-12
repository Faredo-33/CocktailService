import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent implements OnInit {

  constructor(public cocktailServiceService: CocktailServiceService) { }
  cocktails: Cocktail[]=[]

  ngOnInit(): void {
    this.cocktails = this.cocktailServiceService.getCoktails();

  }

}
