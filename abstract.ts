abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attack with ${this.getSpecialAttack()}`)
  }

  abstract getSpecialAttack(): string
  abstract get name(): string
}

// const ryu = new StreetFighter() Cannot create an instance of an abstract class.

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadoken'
  }

  get name(): string {
    return 'Ryu'
  }
}

const ryu = new Ryu()

ryu.fight()
