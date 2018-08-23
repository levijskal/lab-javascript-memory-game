class MemoryGame { 
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };

  shuffleCards(theDeck) {
    
    let cardsArray = theDeck.length;
    let tempCard, i; 

    while (cardsArray) {
      i = Math.floor(Math.random() * cardsArray--);
      tempCard = theDeck[cardsArray];
      theDeck[cardsArray] = theDeck[i];
      theDeck[i] = tempCard;
    }
    this.cards = theDeck; 
  };


  checkIfPair(firstCard, secondCard) {
      this.pairsClicked ++;
    if(firstCard.attr('name') === secondCard.attr('name')) {
      this.pairsGuessed ++;
      // firstCard.attr('name')
      // secondCard.attr('name')
      return true;
    } else {
      return false;
    }
  };

  isFinished() {
    if(this.pairsGuessed === 8) {
      return true;
    } else {
      return false;
    }
  };

}