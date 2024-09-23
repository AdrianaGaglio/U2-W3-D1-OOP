// 1) classe user per la creazione di utenti e comparazione età con metodo dell'oggetto

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  isOlder(user) {
    let outputString = "";
    if (this.age > user.age) {
      outputString = `${this.firstName} is older than ${user.firstName}`;
    } else {
      outputString = `${user.firstName} is older than ${this.firstName}`;
    }
    return outputString;
  }
}

const user1 = new User("Mario", "Rossi", 34, "Milano");
const user2 = new User("Luigi", "Verdi", 30, "Torino");
const user3 = new User("Giovanni", "Bianchi", 50, "Roma");

console.log("--- Exercise 1 - Age compare ---");
console.log(user1.isOlder(user2));
console.log(user3.isOlder(user2));
console.log(user2.isOlder(user1));

// 2) creazione pet da un form

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  hasSameOwner(pet) {
    if (this.ownerName.toLowerCase() === pet.ownerName.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}

// test metodo definito
console.log("--- Exercise 2 - Owner compare ---");
const pet1 = new Pet("lennon", "adriana", "cane", "meticcio");
const pet2 = new Pet("vincent", "adriana", "cane", "meticcio");
const pet3 = new Pet("charlie", "valentina", "cane", "king cavalier");

console.log(pet1.hasSameOwner(pet2)); // esempio con true
console.log(pet1.hasSameOwner(pet3)); // esempio con false

// genero array animali e ne mostro l'elenco
const createPet = document.getElementById("createPet");
const petsContainer = document.createElement("div");
petsContainer.classList.add("margin-top-lg");
createPet.after(petsContainer);
const petsArray = [];

createPet.addEventListener("submit", (event) => {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const newPet = new Pet(petName, ownerName, species, breed);
  const exists = petsArray.some(
    (pet) => pet.petName.toLowerCase().includes(petName.toLowerCase()) && pet.ownerName.toLowerCase().includes(ownerName.toLowerCase())
  );
  if (petsArray.length > 0 && !exists) {
    petsArray.forEach((pet) => {
      if (pet.hasSameOwner(newPet)) {
        // qui richiamo il metodo creato
        alert(
          `${newPet.petName.slice(0, 1).toUpperCase() + newPet.petName.slice(1)} has the same owner of ${
            pet.petName.slice(0, 1).toUpperCase() + pet.petName.slice(1)
          } (Owner name: ${newPet.ownerName.slice(0, 1).toUpperCase() + newPet.ownerName.slice(1)})`
        );
      }
    });
  }
  if (!exists) {
    petsArray.push(newPet);
  } else {
    alert("Attenzione: Animale già inserito!!!");
  }
  petsContainer.innerHTML = "";
  petsContainer.innerHTML = `<h3 class="margin-bottom-md">Pets list</h3>`;
  const petsList = document.createElement("ul");
  petsList.className = "petsList";
  petsContainer.appendChild(petsList);
  petsArray.forEach((pet, index) => {
    const petInstance = document.createElement("li");
    petInstance.classList.add("margin-bottom-md");
    petInstance.innerHTML = `<div>
    <p>Pet name: ${pet.petName.slice(0, 1).toUpperCase() + pet.petName.slice(1)}</p>
    <p>Owner name: ${pet.ownerName.slice(0, 1).toUpperCase() + pet.ownerName.slice(1)}</p>
    <p>Species: ${pet.species.slice(0, 1).toUpperCase() + pet.species.slice(1)}</p>
    <p>Breed: ${pet.breed.slice(0, 1).toUpperCase() + pet.breed.slice(1)}</p>
    </div>`;
    petsList.appendChild(petInstance);
  });
  createPet.reset();
});
