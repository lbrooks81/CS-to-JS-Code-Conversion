export { Animal }
class Animal
{
    name;
    hasFur;
    numberOfLegs;
    sizeInFeet

    constructor(name, hasFur, numberOfLegs, sizeInFeet)
    {
        this.name = name;
        this.hasFur = hasFur;
        this.numberOfLegs = numberOfLegs;
        this.sizeInFeet = sizeInFeet;
    }
    getDescription()
    {
        return `${this.name} has${this.hasFur ? "" : " no"} fur and has ${this.numberOfLegs} legs. It is ${this.sizeInFeet} ft tall.`;
    }
}