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
        console.log("Shannan's Stats:\n")
        console.log(this.name);
        console.log(this.strength);
        console.log(this.speed);
        console.log(this.health + "\n");
    }

    drinkSake() {
        this.health += 10;
    }

}

const shannan = new Ninja("Shannan", 100);

shannan.sayName();


shannan.showStats();

shannan.drinkSake();

shannan.showStats();

// Create a Ninja class

// add an attribute: name

// add an attribute: health

// add a attribute: speed - give a default value of 3

// add a attribute: strength - give a default value of 3

// add a method: sayName() - This should log that Ninja's name to the console

// add a method: showStats() - This should show the Ninja's name, strength, speed, and health.

// add a method: drinkSake() - This should add +10 Health to the Ninja