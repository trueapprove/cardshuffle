var should = require('should'), shuffle = require('../blackjack'), game = require('../index.js');

var rnd = function(){ return .25; }; // de-randomizing

describe('bill demo', function(){
  it('playerOne name is correct', function(){
    var foo = new game(); 
    foo.playerOne.name.should.equal('foo');
  });
    it('playerTwo name is correct', function(){
    var foo = new game(); 
    foo.playerTwo.name.should.equal('bar');
  });
    it('playerTwo name is not wrong', function(){
    var foo = new game(); 
    foo.playerTwo.name.should.not.equal('foo');
  });
    it('playerOne age is correct', function(){
    var foo = new game(); 
    foo.playerOne.age.should.equal(33);
  });
    it('playerTwo age is correct', function(){
    var foo = new game(); 
    foo.playerTwo.age.should.equal(34);
  });
    it('playerOne gets cards', function(){
    var foo = new game(); 
    foo.playerOne.cards[0];
    foo.playerOne.cards[0].toShortDisplayString().length.should.equal(2);
  });
    it('playerTwo gets cards', function(){
    var foo = new game(); 
    foo.playerTwo.cards[0].toShortDisplayString().length.should.equal(2);
  });
   it('playerOne gets only two cards', function(){
    var foo = new game(); 
    foo.playerOne.cards[0].toShortDisplayString().length.should.not.aboveOrEqual(3);
  });
    it('playerTwo gets only two cards', function(){
    var foo = new game(); 
    foo.playerTwo.cards[0].toShortDisplayString().length.should.not.aboveOrEqual(3);
  });
    it('playerOne gets new cards', function(){
    var foo = new game(); 
    var bar = new game(); 
    var firstTime = foo.playerOne.cards[0].toShortDisplayString();
    var secondTime = bar.playerOne.cards[0].toShortDisplayString();
    firstTime.should.not.be.eql(secondTime);
  });
   it('playerTwo gets new cards', function(){
    var foo = new game(); 
    var bar = new game(); 
    var firstTime = foo.playerTwo.cards[0].toShortDisplayString();
    var secondTime = bar.playerTwo.cards[0].toShortDisplayString();
    firstTime.should.not.be.eql(secondTime);
  });
   it('playerOne gets unique cards', function(){
    var foo = new game(); 
    var firstCard = foo.playerOne.cards[0].toShortDisplayString();
    var secondCard = foo.playerOne.cards[1].toShortDisplayString();
    firstCard.should.not.be.eql(secondCard);
  });
  it('playerTwo gets unique cards', function(){
    var foo = new game(); 
    var firstCard = foo.playerTwo.cards[0].toShortDisplayString();
    var secondCard = foo.playerTwo.cards[1].toShortDisplayString();
    firstCard.should.not.be.eql(secondCard);
  });
});