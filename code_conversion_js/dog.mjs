import { Animal } from "./animal.mjs";
export { Dog };
class Dog extends Animal
{
    #breed;

    constructor(name, hasFur, numberOfLegs, sizeInFeet, breed)
    {
        super(name, hasFur, numberOfLegs, sizeInFeet);
        this.#breed = breed;
        Object.seal(this);
    }

    getDescription = () => super.getDescription() + ` This dog is a ${this.#breed}.`
}