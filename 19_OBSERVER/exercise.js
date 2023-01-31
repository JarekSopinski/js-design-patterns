/**
 * Imagine a game where one or more rats can attack a player. Each individual rat has an initial attack value of 1.
 * However, rats attack as a swarm, so each rat's attack value is actually equal to the total number of rats in play.

Given that a rat enters play through the initializer and leaves play (dies) via its die() method,
please implement the Game and Rat classes so that, at any point in the game, the attack value of a rat is always consistent.
 */

class Event {
    constructor(){
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler){
        this.handlers.set(++this.count, handler); // handler is a function that takes sender and args
        return this.count; // count serves as index (token)
    }

    unsubscribe(idx){
        this.handlers.delete(idx);
    }

    // 1) who fired the event?
    // 2) additional data (event args)
    fire(sender, args){
        this.handlers.forEach((value, key) => value(sender, args));
    }
}

class Game
{
    constructor(){
        this.ratEnters = new Event();
        this.ratDies = new Event();
        this.notifyRat = new Event();
    }

    fireRatEnters(sender){
        this.ratEnters.fire(sender, null);
    }

    fireRatDies(sender){
        this.ratDies.fire(sender, null);
    }

    fireNotifyRat(sender, whichRat){
        this.notifyRat.fire(sender, whichRat);
    }
}

class Rat
{
  constructor(game)
  {
    this.attack = 1;
    this.game = game;

    game.ratEnters.subscribe(this.handleRatEnters.bind(this));
    game.ratDies.subscribe(this.handleRatDies.bind(this));
    game.notifyRat.subscribe(this.handleNotifyRat.bind(this));

    game.fireRatEnters(this);
  }

  handleRatEnters(sender, args){
    if (sender !== this){
        this.attack++;
        this.game.fireNotifyRat(this, sender);
    }
  }

  handleRatDies(sender, args){
    this.attack--;
  }

  handleNotifyRat(sender, whichRat){
    if (whichRat === this){
        this.attack++;
    }
  }

  die()
  {
    this.game.fireRatDies(this);
  }

}

let game = new Game();
let rat = new Rat(game);
let rat2 = new Rat(game);