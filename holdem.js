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
  suits.forEach(function(suit){
    var valueCounter = 0;
    names.forEach(function(name){
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

