//Create Texas Hold'em-specific set (no wilds and suits have no value.)

var names = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']

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

//Identify hands within a checking set.

function isStraight(fiveCardSet) {
  var sortedValues = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  var checkLowStraight = (sortedValues[0] === 1 && sortedValues[1] === 2 && sortedValues[2] === 3 && sortedValues[3] === 4 && sortedValues[4] === 13);
  var checkIncreasing = sortedValues
    .reduce( (acc, item) => 
      (item + 1 === acc) ? item : false, );
  var checkDecreasing = sortedValues
    .reduce( (acc, item) => 
      (item - 1 === acc) ? item : false, );
  return !!checkIncreasing || !!checkDecreasing || !!checkLowStraight;
}

function isFlush(fiveCardSet) {
  return fiveCardSet
    .map(item => item.suit)
    .every((val, item, array) => val === array[0]); 
}

function isStraightFlush(fiveCardSet) {
  return isFlush(fiveCardSet) && isStraight(fiveCardSet);
}

function isFourOfAKind(fiveCardSet) {
  var result = false;
  var sorted = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  for (var i = 0; i < sorted.length - 3; i++) {
    if (sorted[i] === sorted[i + 1] && sorted[i + 1] === sorted[i + 2] && sorted[i + 2] === sorted[i + 3]) {
      result = true;
    }
  }
  return result;
}

function isFullHouse(fiveCardSet) {
  var counter = 0;
  var sorted = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  var sortedCopy = sorted.slice();
  for (var i = 0; i < sorted.length - 2; i++) {
    if (threeCardSet(sorted[i], sorted[i + 1], sorted[i + 2])) {
      counter++;
      sortedCopy.splice(i, 3);
    }
  }
  return counter === 1 && sortedCopy[0] === sortedCopy[1];
}

function isThreeOfAKindOnly(fiveCardSet) {
  var counter = 0;
  var sorted = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  var sortedCopy = sorted.slice();
  for (var i = 0; i < sorted.length - 2; i++) {
    if (threeCardSet(sorted[i], sorted[i + 1], sorted[i + 2])) {
      counter++;
      sortedCopy.splice(i, 3);
    }
  }
  return counter === 1 && sortedCopy[0] !== sortedCopy[1];
}

function isTwoPairs(fiveCardSet) {
  var sorted = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  var reduced = sorted.reduce(function(acc, item) {
    if (acc.indexOf(item) < 0) {
      acc.push(item);
    }
    return acc;
  }, []);
  return reduced.length === 3 && !isThreeOfAKindOnly(fiveCardSet);  
}

function isPairOnly(fiveCardSet) {
  var counter = 0;
  var sorted = fiveCardSet
    .map(item => item.value)
    .sort((a, b) => a - b);
  for (var i = 0; i < sorted.length - 1; i++) {
    if (twoCardPair(sorted[i], sorted[i + 1])) {
      counter++;
    }
  }
  return counter === 1;
}

function twoCardPair(first, second) {
  return first === second;
}

function threeCardSet(first, second, third) {
  return first === second && second === third;
}

function fourCardSet(first, second, third, fourth) {
  return first === second && second === third && third === fourth;
}


//Mechanics

function dealHand(gameDeck) {

}

function dealCard(gameDeck) {

}


