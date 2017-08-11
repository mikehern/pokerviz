//Create Texas Hold'em-specific set (no wilds and suits have no value.)

var names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

var suits = ['d','c','h','s']

var Card = {
  suit: 'blank',
  name: 'blank',
  value: 0
}

//Create deck, assigning values for high card comparison and straight evaluation.

function CreateHoldemDeck(suits, names) {
  var cardStack = [];
  suits.forEach(suit => {
    var valueCounter = 0;
    names.forEach(name => {
      valueCounter++;
      var card = Object.create(Card);
      card.suit = suit;
      card.name = name;
      card.value = valueCounter;
      cardStack.push(card);
    });
  });
  return cardStack;
}

//Fisher-Yates shuffle, for least amount of bias.

function shuffle(deck) {
  var i = 0;
  var j = 0;
  var temp = null;
  for (var i = deck.length - 1; i > 0; i--){
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

//Hands testing. Will eventually create testing suite with assertions.

var coordinatedStraight //3c, 4d, 5s, 6s, 7h
var uncoordinatedStraight //4c, 3d, 7d, 6s, 5s
var aceHighStraight //Ad, 10d, Kd, Qs, Jh
var aceLowStraight //3d, 4d, As, 2d, 5d
var straightFlush //10c, Jc, Qc, Ac, Kc
var fullHouse //5s, 5c, 5d, 2c, 2s
var quads //10d, 10c, 10h, 10s, Ac
var trips //5h, 5d, 5c, 10c, Kc
var twoPairs //2d, 2s, 7d, 7s, Ah
var pair //Kd, Kc, 2s, 8s, 5c

//Identify hands within a checking set.

function isStraight(fiveCardSet) {
  //Need to handle ace case and set value to 0
  var sortedValues = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  var checkIncreasing = sortedValues
    .reduce( (acc, item) => 
      (item + 1 === acc) ? item : false, );
  var checkDecreasing = sortedValues
    .reduce( (acc, item) => 
      (item - 1 === acc) ? item : false, );
  return !!checkIncreasing || !!checkDecreasing;
}

function isFlush(fiveCardSet) {
  return fiveCardSet
    .map(item => item.suit)
    .every((val, item, array) => val === array[0]); 
}

function isStraightFlush(fiveCardSet) {

}

function isFourOfAKind(fourCardSet) {

}

function isFullHouse(fiveCardSet) {

}

function isThreeOfAKind(threeCardSet) {

}

function isTwoPairs(fourCardSet) {
  
}

function isPair(twoCardSet) {

}

//Mechanics

function dealHand(gameDeck) {

}

function dealCard(gameDeck) {

}


