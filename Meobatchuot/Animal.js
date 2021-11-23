class Animal {
    name
    speed
    weight
    livestatus =true

    constructor(name,speed,weight){
        this.name = name;
        this.speed = speed;
        this.weight = weight;
    }

    setName(name){
        this.name = name;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    setWeight(weight){
        this.weight = weight;
    }
    getName(){
        return this.name;
    }
    getSpeed(){
        return this.speed;
    }
    getWeight(){
        return this.weight;
    }
    liveStatus(){
        this.livestatus = false;
    }
}