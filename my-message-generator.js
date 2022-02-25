


const poem = {

    _words: {
        colors: ['red', 'blue', 'green', 'yellow'],
        flowers: ['Roses', 'Violets', 'Pansies', 'Orchids'],
        foods: ['Sugar', 'Lemon', 'Pepper', 'Ice Cream'],
        descriptions: ['sweet', 'sour', 'hot', 'cold']
    },

    get colors() {
        return this._words.colors;
    },
    set colors(colorsIn) {
        this._words.colors = colors;
    },
    get flowers() {
        return this._words.flowers;
    },
    set flowers(flowersIn) {
        this._words.flowers = flowers;
    },
    get foods() {
        return this._words.foods;
    },
    set foods(foodsIn) {
        this._words.foods = foods;
    },
    get descriptions() {
        return this._words.descriptions;
    },
    set descriptions(descriptionsIn) {
        this._words.descriptions = descriptions;
    },
    get words() {
        return {
            colors: this.colors,
            flowers: this.flowers,
            foods: this.foods,
            descriptions: this.descriptions
        }
    },

    getRandomWord(wordType) {
        const allWords = this._words[wordType];
        indexNumber = Math.floor(Math.random() * allWords.length);
        return allWords[indexNumber];

    },
    generatePoem() {
        const color1 = this.getRandomWord('colors');
        const color2 = this.getRandomWord('colors');
        const flower1 = this.getRandomWord('flowers');
        const flower2 = this.getRandomWord('flowers');
        const food = this.getRandomWord('foods');
        const description = this.getRandomWord('descriptions');

        return `${flower1} are ${color1},\n${flower2} are ${color2},\n${food} is ${description}, and so are you!`   }


};

console.log(poem.generatePoem());





