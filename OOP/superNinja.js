class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name + "\n");
    }

    showStats() {
        console.log(`${this.name}'s Stats:\n`)
        console.log(this.name);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health + "\n");
    }

    drinkSake() {
        this.health += 10;
    }

}

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.wisdom = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats() {
        console.log(`${this.name}'s Stats:\n`)
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}\n`);
    }

    drinkSake() {
        console.log("Refreshing!")
    }
}

const splinter = new Sensei("Master Splinter", 210);

splinter.sayName();
splinter.showStats();
splinter.speakWisdom();
splinter.drinkSake();
splinter.showStats();

// example output
// const superSensei = new Sensei("Master Splinter");
// superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
// superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"

// create a class Sensei that inherits from the Ninja class

// add an attribute: wisdom - default to 10

// create a method: speakWisdom()

// create a method: drinkSake()