var game = function() {
    var Shuffle = require('shuffle');
    var deck = Shuffle.shuffle();
    var handOne = deck.draw(5);
    var handTwo = deck.draw(5);
    
    this.playerOne = {
        name: "foo", 
        cards: handOne, 
        age: 33
    }
    this.playerTwo = {
        name: "bar", 
        cards: handTwo, 
        age: 34
    }
};
module.exports = game;
var foo = new game(); 
console.log("Player ONE has " + foo.playerOne.cards);
console.log("Player TWO has " + foo.playerTwo.cards);
