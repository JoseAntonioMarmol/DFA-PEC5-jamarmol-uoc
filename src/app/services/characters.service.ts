import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterDTO,CharacterListResponseDTO } from '../Models/charactersDTO';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterListResponseDTO>{
    return this.http.get<CharacterListResponseDTO>("https://rickandmortyapi.com/api/character");
  }
  getCharacter(id: number): Observable<CharacterDTO>{
    return this.http.get<CharacterDTO>(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
