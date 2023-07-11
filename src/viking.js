// Soldier
class Soldier {
     constructor(health, strength) {
        this.health = health;
        this.strength = strength;
     }
     attack() {
        return this.strength 
     };
     receiveDamage(damage) {
        this.health = this.health-damage
     }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
       
        this.name = name;
     }
     receiveDamage(damage) {
        this.health = this.health-damage
        if (this.health> 0) {
            return `${this.name} has received ${damage} points of damage`
        }
        else{ 
            return `${this.name} has died in act of combat`
        }
     }

     battleCry(){
        return "Odin Owns You All!"
     }
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
       

     }
    receiveDamage(damage) {
        this.health = this.health-damage
        if (this.health>0) {
            return `A Saxon has received ${damage} points of damage`
        }
        else{ 
            return 'A Saxon has died in combat'
        }
    }

}

// War
class War {
    constructor () {
this.vikingArmy =[];
this.saxonArmy = []
    }
addViking(Viking) {
    this.vikingArmy.push(Viking)
}
addSaxon(Saxon) {
    this.saxonArmy.push(Saxon)
}
vikingAttack() {
    let randomV = Math.floor(Math.random()* this.vikingArmy.length)
    let randomS = Math.floor(Math.random()* this.saxonArmy.length)
    let res =  this.saxonArmy[randomS].receiveDamage(this.vikingArmy[randomV].strength) 
    
    this.saxonArmy.splice(this.saxonArmy[randomS])
    return res
}
saxonAttack() {
    let randomV = Math.floor(Math.random()* this.vikingArmy.length)
    let randomS = Math.floor(Math.random()* this.saxonArmy.length)
    let res =  this.vikingArmy[randomV].receiveDamage(this.saxonArmy[randomS].strength) 
    console.log(this.vikingArmy[randomV].health)
    if (this.vikingArmy[randomV].health === 0) {
        this.vikingArmy.splice(this.vikingArmy[randomV])
    }
  
  
    return res

}
showStatus() {

    if(this.vikingArmy.length === 0) {
        return "Saxons have fought for their lives and survived another day..."
    }
    else if (this.saxonArmy.length === 0) {
        return "Vikings have won the war of the century!"
    }
    else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) 
     {return "Vikings and Saxons are still in the thick of battle."}
}
}

let warObject = new War;
warObject.vikingAttack();
warObject.saxonAttack();




