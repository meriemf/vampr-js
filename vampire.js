class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
  
    this.offspring.push(vampire);
    vampire.creator= this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let total = this.offspring.length; 
    return total;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let vampire = this;

      while (vampire.creator) {
        vampire = vampire.creator;
        numberOfVampires++;
      }
  
      return numberOfVampires;
    }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (vampire.numberOfVampiresFromOriginal >= this.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

    // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    //console.log(name);
    let vampire = this;
    if (vampire.name === name) {
      return vampire;
    } else {
      for (let item of this.offspring) {
         item.vampireWithName(name);
      }
      return null;
    }
    }
  
    // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = this.offspring.length;
    if (this.offspring.length === 0) {
      return total;
    } else {
      
      for (let child of this.offspring) {
        total = total + child.totalDescendents;

      }
     return total;
    }
     }
  
    // Returns an array of all the vampires that were converted after 1980
    get allMillennialVampires() {
    let millennial = [];
    if (this.yearConverted > 1980){
      millennial.push(this);
    };
    
    for (let item of this.offspring) {
        millennial= millennial.concat(item.allMillennialVampires);
    }
    return millennial;
    }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  // closestCommonAncestor(vampire) {
  //   if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
  //     return this.name;
  //   } else {
  //     return vampire.name;
  //   }
  // }0
}

module.exports = Vampire;
