import { Component, OnInit } from '@angular/core';
import { Word } from './word';
import { User } from '../../clases/user';
import { UserService } from '../../servicios/user.service';
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
  succedWorks: number;
  word: string;
  buttonSuccesClass: string[];
  anagramsWord: string[];
  userWords: string[];
  time: number;
  showPopUp: boolean = false;
  success: boolean = false;
  messege: string;

  constructor(private user: User, private userService: UserService) { }
  ngOnInit() {
    this.user.won = false;
    this.user.pointsActualGame = 0;
    this.user.lose = false;
    this.user.anagrama = Number(localStorage.getItem("anagrama"));
    this.succedWorks = 0;
    this.messege = "Ganaste!!";
    this.showPopUp = true;
    this.time = 60;
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
      this.user.pointsActualGame += 30;
      this.succedWorks++;
      this.buttonSuccesClass[index] = "btn btn-outline-success pull-right";
      if (this.succedWorks == this.words.length) {
        this.messege = "Sos un mostroooo!!!";
        this.user.won = true;
        this.showPopUp = true;
      }
    }
    else {
      this.user.pointsActualGame -= 10;
    }
  }

  sendData(){
    this.user.anagrama += this.user.pointsActualGame;
    this.user.pointsActualGame = this.user.anagrama;
    this.user.actualGame = "anagrama";
    this.user.email = localStorage.getItem("email");
    localStorage.setItem("anagrama", this.user.anagrama.toString());
    this.userService.sendResults(this.user);
  }

  timeOut(timeOut): void {
    if (timeOut) {
      console.log("timeOut " + timeOut);
      this.messege = "Se acabó el tiempo";
      this.showPopUp = true;
    }
  }
}
