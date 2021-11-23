class Rat{
    animalName

    constructor(animalName) {
        this.animalName =animalName;
    }
    setWeight(weight){
        this.animalName.weight = weight;
    }
    setSpeed(speed){
        this.animalName.speed = speed;
    }
    getName(){
        return this.animalName.name;
    }
    getSpeed(){
        return this.animalName.speed;
    }
    getWeight(){
        return this.animalName.weight
    }
    liveStatus(){
        this.animalName.livestatus = false;
    }
    sound(){
        alert("chit chit!")
    }
}