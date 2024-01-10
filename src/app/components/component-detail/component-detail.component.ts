import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { CharacterDTO } from '../../Models/charactersDTO';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
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
export class ComponentDetailComponent implements OnInit{
  character!: CharacterDTO;
  panelOpenState: boolean = false;
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

ngOnInit(): void {
  const identifier = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  console.log(identifier);
  this.charactersService.getCharacter(identifier).subscribe((data: CharacterDTO) => {
    if(!data){
     return this.router.navigate(['/']);
    }
    this.character = data;
    // console.log(this.character);
    return '';
  });

}
}
