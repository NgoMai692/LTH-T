class Apple{
    weight

    constructor(weight) {
        this.weight = weight;
    }

    decrease(){
        if(this.isEmpty()){
            return this.weight--;
        }
    }
    getWeight(){
        return this.weight;
    }
    isEmpty(){
        return this.weight === 0 ? false : true;
    }


}