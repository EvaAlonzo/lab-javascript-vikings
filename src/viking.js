// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
}
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
   constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  attack(){
     return this.strength;
    }
  
  receiveDamage(damage){
    this.name = this.name
    this.health = this.health - damage;

    if (this.health >= 1){
      return `${this.name} has received ${damage} points of damage`
    }else (this.health <= 0);{ 
      return `${this.name} has died in act of combat`
    }
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{

  attack(){
    return this.strength;
  }
  
  receiveDamage(damage){
    this.health = this.health - damage;

    if (this.health >= 1){
      return `A Saxon has received ${damage} points of damage`
    }else (this.health <= 0);{ 
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
    vikingArmy =[]
    saxonArmy = []

  addViking(Viking){
   this.vikingArmy.push(Viking)  
  }

  addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
  }

  vikingAttack(){
    //position o index
   let idRnd = Math.floor(Math.random() * this.saxonArmy.length);
   let rndSaxon = this.saxonArmy[idRnd]
   let rndViking = this.vikingArmy[Math.floor(Math.random() * this.saxonArmy.length)]

   let msg = rndSaxon.receiveDamage(rndViking.attack())

   if(rndSaxon.health <= 0){
     //splice nos ayuda a eliminar uno o mas elementos
     this.saxonArmy.splice(idRnd,1)
     return msg
   }
    return msg
  }

  saxonAttack(){
    let idRnd = Math.floor(Math.random() * this.vikingArmy.length)
    let rndViking = this.vikingArmy[idRnd]
    let rndSaxon = this.saxonArmy[Math.floor(Math.random() * this.vikingArmy.length)]


    let msg = rndViking.receiveDamage(rndSaxon.attack())
    if(rndViking.health <= 0){
      this.vikingArmy.splice(idRnd,1)
      return msg
    }
    return msg
  }

  showStatus(){
    if(!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day..."
    if(!this.saxonArmy.length) return "Vikings have won the war of the century!"
    if(this.saxonArmy.length && this.vikingArmy.length) return "Vikings and Saxons are still in the thick of battle."
  }
  
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
