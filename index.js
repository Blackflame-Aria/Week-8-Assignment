//Week 8 Assignment requirements:
//use at least one array
//use at least two classes
//your menu should have the options to create, view, and delete elements

//Menu for kitten adoption
// Kitten class
// name
// color
class Kitten {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }
  
  // Adoption Menu class
  class AdoptionMenu {
    constructor() {
      // Kittens array 
      this.kittens = []; 
    }
  
    // Add kitten
    // Prompt for name
    // Prompt for fur color
    // Create new kitten
    // Push kitten into array
    addKitten() {
      let name = prompt("Enter kitten name:");
      let color = prompt("Enter fur color:");
      this.kittens.push(new Kitten(name, color));
    }
  
    // Delete kitten
    deleteKitten() {
      let index = prompt("Enter kitten index to remove:");
      this.kittens.splice(index, 1);
    }
  
    // View kittens
    viewKittens() {
      let display = ``;
      for (let i = 0; i < this.kittens.length; i++) {
        display += `${i}) ${this.kittens[i].name} - ${this.kittens[i].color}\n`;
      }
      alert(`🐾 Adoptable Kittens 🐾\n\n${display}`);
    }
  
    // Show main menu
    showMainMenu() {
      return prompt(`
        Kitten Adoption Center:
        ------------------------
        0) Exit
        1) Add kitten
        2) Remove kitten
        3) View all kittens
      `);
    }
  
    // Start menu
    start() {
      let selection = this.showMainMenu();
      while (selection != 0) {
        switch(selection) {
          case "1": this.addKitten(); break;
          case "2": this.deleteKitten(); break;
          case "3": this.viewKittens(); break;
          default: selection = 0;
        }
        selection = this.showMainMenu();
      }
      alert("Thank you for helping kittens! 🐱❤️");
    }
  }
  
  // Instantiate the menu and invoke start
  let adoptionCenter = new AdoptionMenu();
  adoptionCenter.start();