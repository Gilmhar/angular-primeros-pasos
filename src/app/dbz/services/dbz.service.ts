import { Injectable } from '@angular/core';

import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Kakarot',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Yamcha',
    power: 1800
  },
  {
    id: uuid(),
    name: 'Yayirobe',
    power: 800
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  },
  {
    id: uuid(),
    name: 'Nappa',
    power: 4800
  },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  deleteCharacterByID(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
