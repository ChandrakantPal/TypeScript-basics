abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {}

  abstract getSpecialAttack(): string
}

// const ryu = new StreetFighter() Cannot create an instance of an abstract class.

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadoken'
  }
}

const ryu = new Ryu()

console.log(ryu.getSpecialAttack())
