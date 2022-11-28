class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = [];
    this.pairsGuesses = [];
  }

  shuffleCards() {

    const shuffledCards = [];
    
    for ( let i = this.cards.length ; i > 0 ; i-- ) {

      const randomIndex = Math.floor( Math.random() * this.cards.length );
      shuffledCards.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
      
    }

    this.cards = shuffledCards;

  }

  checkIfPair(card1, card2) {
    
    this.pairsClicked++;

    if ( card1 === card2 ) {
      this.pairsGuesses++;
      return true;
    } else {
      return false;
    }

  }

  checkIfFinished() {
    
    if ( this.pairsGuesses === this.cards.length / 2 ) {
      return true;
    } else {
      return false;
    }

  }
}