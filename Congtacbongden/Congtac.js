class Button{
    lamp
    status
    constructor (status) {
        this.status = status;
    }
    connectToLamp (lamp) {
        this.lamp = lamp;
    }
    buttonOn () {
        if (this.lamp === undefined) {
            console.log("Connect to lamp");
        } else {
            this.status = true;
            this.lamp.turnOn ();
        }
    }
    buttonOff () {
        if (this.lamp === undefined) {
            console.log("Connect to lamp");
        } else {
            this.status = false;
            this.lamp.turnOff ();
        }
    }

}