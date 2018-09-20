export class Word {
    private _word: string;
    private _succes: boolean;

    public get word(): string {
        return this._word
    }
    public set word(word: string) {
        this._word = (word !== null && word != undefined) ? word : "Error";
    }
    public get succes(): boolean {
        return this._succes;
    }
    public set succes(succes: boolean) {
        this._succes = succes;
    }

    constructor(word: string) {
        this.word = word;
        this._succes = false;
    }

    public generateAnagram(): string {
        let length: number = this.word.length;
        let anagramWord: string;
        let anagramWordAux: string[] = this.word.split("");
        let auxChar: string;
        do {
            for (let i = 0; i < 50; i++) {
                let randomIndexA: number = Math.floor(Math.random() * length);
                let randomIndexB: number = Math.floor(Math.random() * length);
                auxChar = anagramWordAux[randomIndexA];
                anagramWordAux[randomIndexA] = anagramWordAux[randomIndexB];
                anagramWordAux[randomIndexB] = auxChar;
            }
        } while (this.word === anagramWord)
        anagramWord = anagramWordAux.join("");
        console.log(anagramWord);
        return anagramWord;
    }

    public check(word: string) {
        console.log(word);
        console.log(this.word);
        if (this.word.toLowerCase().trim() === word.toLowerCase().trim())
            this.succes = true;
        return this.succes;
    }
}
