import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  CharacterDTO,
  CharacterListResponseDTO,
} from '../../Models/charactersDTO';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class ComponentListComponent implements OnInit {
  // displayedColumns: string[] = ['id', 'name','gender','status',];
  characters: CharacterDTO[] = [];
  viewMode: string = 'table';

  constructor(private charactersService: CharactersService) {}
  ngOnInit(): void {
    //leemos los datos de la API

    this.charactersService
      .getCharacters()
      .subscribe((data: CharacterListResponseDTO) => {
        this.characters = data.results;
        // console.log(`Resultado de la API ${this.characters}`);
        // console.log(this.characters);
        // console.log(data);
      });

    // Habilitamos o deshabilitamos los botones en función del modo actual
    // this.toggleModeButton.disabled = this.mode === 'grid';
    // this.cardModeButton.disabled = this.mode === 'card';
  }
}