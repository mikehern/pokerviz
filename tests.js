//Hands testing. Will eventually create testing suite with assertions.

var coordinatedStraight = [
  {suit: "c", name: "3", value: 2},
  {suit: "d", name: "4", value: 3},
  {suit: "s", name: "5", value: 4},
  {suit: "s", name: "6", value: 5},
  {suit: "h", name: "7", value: 6}
];//3c, 4d, 5s, 6s, 7h
  var uncoordinatedStraight = [
  {suit: "c", name: "6", value: 5},
  {suit: "d", name: "4", value: 3},
  {suit: "s", name: "3", value: 2},
  {suit: "s", name: "5", value: 4},
  {suit: "h", name: "7", value: 6}
];
var aceHighStraight = [
  {suit: "d", name: "A", value: 13},
  {suit: "h", name: "T", value: 9},
  {suit: "h", name: "K", value: 12},
  {suit: "h", name: "Q", value: 11},
  {suit: "c", name: "J", value: 10}
]; //Ad, 10d, Kd, Qs, Jh
var aceLowStraight = [
  {suit: "d", name: "3", value: 2},
  {suit: "d", name: "4", value: 3},
  {suit: "s", name: "A", value: 13},
  {suit: "d", name: "2", value: 1},
  {suit: "d", name: "5", value: 4}
];//3d, 4d, As, 2d, 5d
var straightFlush = [
  {suit: "c", name: "T", value: 9},
  {suit: "c", name: "J", value: 10},
  {suit: "c", name: "Q", value: 11},
  {suit: "c", name: "A", value: 13},
  {suit: "c", name: "K", value: 12}
];//10c, Jc, Qc, Ac, Kc
var fullHouse = [
  {suit: "s", name: "9", value: 8},
  {suit: "c", name: "9", value: 8},
  {suit: "d", name: "T", value: 9},
  {suit: "c", name: "T", value: 9},
  {suit: "s", name: "T", value: 9}
]; //5s, 5c, 5d, 2c, 2s
var quads = [
  {suit: "d", name: "2", value: 1},
  {suit: "c", name: "2", value: 1},
  {suit: "h", name: "2", value: 1},
  {suit: "s", name: "2", value: 1},
  {suit: "c", name: "3", value: 2}
]; //10d, 10c, 10h, 10s, Ac
var trips = [
  {suit: "c", name: "5", value: 4},
  {suit: "c", name: "5", value: 4},
  {suit: "c", name: "T", value: 9},
  {suit: "d", name: "K", value: 12},
  {suit: "h", name: "5", value: 4}
]; //5h, 5d, 5c, 10c, Kc
var twoPairs = [
  {suit: "d", name: "2", value: 1},
  {suit: "s", name: "2", value: 1},
  {suit: "d", name: "7", value: 6},
  {suit: "s", name: "7", value: 6},
  {suit: "s", name: "A", value: 13}
];//2d, 2s, 7d, 7s, Ah
var pair = [
  {suit: "d", name: "K", value: 12},
  {suit: "c", name: "K", value: 12},
  {suit: "s", name: "2", value: 1},
  {suit: "s", name: "8", value: 7},
  {suit: "c", name: "5", value: 4}
];//Kd, Kc, 2s, 8s, 5c

console.log(isStraight(coordinatedStraight));
console.log(isStraight(uncoordinatedStraight));
console.log(isStraight(aceHighStraight));
console.log(isStraight(aceLowStraight));
console.log(isStraight(straightFlush));
console.log(isStraight(fullHouse));
console.log(isStraight(quads));
console.log(isStraight(trips));
console.log(isStraight(twoPairs));
console.log(isStraight(pair));

console.log(isStraightFlush(coordinatedStraight));
console.log(isStraightFlush(uncoordinatedStraight));
console.log(isStraightFlush(aceHighStraight));
console.log(isStraightFlush(aceLowStraight));
console.log(isStraightFlush(straightFlush));
console.log(isStraightFlush(fullHouse));
console.log(isStraightFlush(quads));
console.log(isStraightFlush(trips));
console.log(isStraightFlush(twoPairs));
console.log(isStraightFlush(pair));

console.log(isFlush(coordinatedStraight));
console.log(isFlush(uncoordinatedStraight));
console.log(isFlush(aceHighStraight));
console.log(isFlush(aceLowStraight));
console.log(isFlush(straightFlush));
console.log(isFlush(fullHouse));
console.log(isFlush(quads));
console.log(isFlush(trips));
console.log(isFlush(twoPairs));
console.log(isFlush(pair));

console.log(isFullHouse(coordinatedStraight));
console.log(isFullHouse(uncoordinatedStraight));
console.log(isFullHouse(aceHighStraight));
console.log(isFullHouse(aceLowStraight));
console.log(isFullHouse(straightFlush));
console.log(isFullHouse(fullHouse));
console.log(isFullHouse(quads));
console.log(isFullHouse(trips));
console.log(isFullHouse(twoPairs));
console.log(isFullHouse(pair));

console.log(isFourOfAKind(coordinatedStraight));
console.log(isFourOfAKind(uncoordinatedStraight));
console.log(isFourOfAKind(aceHighStraight));
console.log(isFourOfAKind(aceLowStraight));
console.log(isFourOfAKind(straightFlush));
console.log(isFourOfAKind(fullHouse));
console.log(isFourOfAKind(quads));
console.log(isFourOfAKind(trips));
console.log(isFourOfAKind(twoPairs));
console.log(isFourOfAKind(pair));

console.log(isThreeOfAKindOnly(coordinatedStraight));
console.log(isThreeOfAKindOnly(uncoordinatedStraight));
console.log(isThreeOfAKindOnly(aceHighStraight));
console.log(isThreeOfAKindOnly(aceLowStraight));
console.log(isThreeOfAKindOnly(straightFlush));
console.log(isThreeOfAKindOnly(fullHouse));
console.log(isThreeOfAKindOnly(quads));
console.log(isThreeOfAKindOnly(trips));
console.log(isThreeOfAKindOnly(twoPairs));
console.log(isThreeOfAKindOnly(pair));

console.log(isTwoPairs(coordinatedStraight));
console.log(isTwoPairs(uncoordinatedStraight));
console.log(isTwoPairs(aceHighStraight));
console.log(isTwoPairs(aceLowStraight));
console.log(isTwoPairs(straightFlush));
console.log(isTwoPairs(fullHouse));
console.log(isTwoPairs(quads));
console.log(isTwoPairs(trips));
console.log(isTwoPairs(twoPairs));
console.log(isTwoPairs(pair));

console.log(isPairOnly(coordinatedStraight));
console.log(isPairOnly(uncoordinatedStraight));
console.log(isPairOnly(aceHighStraight));
console.log(isPairOnly(aceLowStraight));
console.log(isPairOnly(straightFlush));
console.log(isPairOnly(fullHouse));
console.log(isPairOnly(quads));
console.log(isPairOnly(trips));
console.log(isPairOnly(twoPairs));
console.log(isPairOnly(pair));