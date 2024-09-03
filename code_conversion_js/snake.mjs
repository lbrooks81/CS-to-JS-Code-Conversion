import { Animal } from "./animal.mjs";
export { Snake };
class Snake extends Animal
{
    poisonous;
    constructor(name, hasFur, numberOfLegs, sizeInFeet, poisonous)
    {
        super(name, hasFur, numberOfLegs, sizeInFeet);
        this.poisonous = poisonous;
        Object.seal(this);
    }

    getDescription()
    {
        if(this.poisonous)
            return super.getDescription() + " Look out! This snake is poisonous.";
        return super.getDescription();
    }
}