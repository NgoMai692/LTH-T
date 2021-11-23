class Lamp{
    status
    constructor (status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
    setStatus() {
        this.status = status;
    }
    turnOn() {
        this.status = true;
        console.log("Bóng đèn sáng");
    }
    turnOff() {
        this.status = false;
        console.log("Bóng đèn tắt");
    }
}