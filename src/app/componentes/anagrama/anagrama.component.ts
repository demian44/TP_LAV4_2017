import { Component, OnInit } from '@angular/core';
import { Word } from './word';
const WORDSLENGHT: number = 5;
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  dataWords: string[] = ["jupiter", "urano", "saturno", "neptuno", "mercurio", "tierra",
    "arroz", "lapiz", "manzana", "lombriz", "violeta", "rojo", "amarillo", "marte",
    "azul", "reparar", "animal", "perro", "macri", "gato", "zapato", "europa",];
  words: Word[];
  word: string;
  buttonSuccesClass: string[];
  anagramsWord: string[];
  userWords: string[];

  constructor() { }
  ngOnInit() {
    this.buttonSuccesClass = [];
    for (let i = 0; i < WORDSLENGHT; i++) this.buttonSuccesClass.push("btn btn-outline-anagrama pull-right");
    this.userWords = [];
    this.generateAnagramsWord();
  }

  generateAnagramsWord() {
    this.words = [];
    this.anagramsWord = [];
    for (let i = 0; i < WORDSLENGHT; i++) {
      this.words.push(new Word(this.dataWords.splice(Math.floor(Math.random() * this.dataWords.length), 1)[0]));
    }

    this.words.forEach((word: Word) => {
      this.anagramsWord.push(word.generateAnagram());
    })
    console.log("");
    console.log(this.dataWords);
    console.log(this.words);
    console.log(this.anagramsWord);
  }

  checkWord(index: number) {
    if (this.words[index].check(this.userWords[index])) {
      alert("BIEN PAPI");
      this.buttonSuccesClass[index] = "btn btn-outline-success pull-right";
    }
  }
}
