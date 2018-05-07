var cards = [
 {
 	rank: "queen",
 	suite: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suite: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suite: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suite: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }
];

var cardsInPlay = [];

var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert('You found a match!');
		}
		else {
			alert('Sorry, try again.');
		}
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

flipCard(0);
flipCard(1);

console.log(cards[0].suite);
console.log(cards[0].cardImage)