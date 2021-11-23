class Cat {
    animalName
    catchstatus

    constructor(animalName) {
        this.animalName =animalName;
    }
    setWeight(weight){
        this.animalName.weight = weight;
    }
    setSpeed(speed) {
        this.animalName.speed = speed;
    }
    getName(){
        return this.animalName.name;
    }
    getMaxSpeed(){
        return this.animalName.speed;
    }
    getWeight(){
        return this.animalName.weight;
    }
    sound(){
        alert("Meo Meo!")
    }

    catchRat(animalName){
        if(this.getMaxSpeed() > animalName.getSpeed()){
            alert("Meo Bắt được chuột")
            this.catchstatus = true;
        }else {
            alert("Mèo không bắt được chuột")
            this.catchstatus = false
        }
    }

    eatRat(rat){
        if (this.catchstatus && rat.animalName.livestatus){
            alert("Mèo ăn chuột");
            rat.sound();
            this.animalName.setWeight(rat.getWeight()+this.animalName.getWeight());
            rat.setWeight(0);
            rat.liveStatus();
            rat.setSpeed(0);
            this.sound();
        }else {
            alert("Mèo không ăn chuột chết!")
        }
    }
}