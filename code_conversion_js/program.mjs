import { Animal } from "./animal.mjs";
import { Dog } from "./dog.mjs";
import { Snake } from "./snake.mjs";

let dog1 = new Dog("Piper", true, 4, 3.1, "German Shepard");
let snake1 = new Snake("Scalez", false, 0, 5, true);
let snake2 = new Snake("Viper", false, 0, 4.2, false);
let dog2 = new Dog("Fido", false, 4, 1.9, "Xoloitzcuintli");
const animals = [dog1, snake1, snake2, dog2];

console.log("Printing snakes...");

for (let a of animals)
{
    if(a instanceof Snake)
    {
        console.log(a.getDescription())
    }
}


const FAVORITE_ANIMALS = 2;
const favoriteAnimals = [0, 0];

const getRandomNumber = (min, max) =>
{
    return Math.floor(Math.random() * (max - min)) + min;
}

favoriteAnimals[0] = animals[getRandomNumber(0, animals.length)];

let i = 1;

for (; i < FAVORITE_ANIMALS; i++)
{
    favoriteAnimals[i] = animals[getRandomNumber(0, animals.length)];

    if(favoriteAnimals[i].name === favoriteAnimals[i - 1].name)
    {
        i--;
    }
}


// print them to the console


console.log("\nPrinting favorite animals...");
while(i > 0)
{
    i--;
    console.log(favoriteAnimals[i].getDescription());
}