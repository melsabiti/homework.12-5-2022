class Governor {
    constructor() {
        this.firstName = David;
        this.lastName = Smith;
        this.age = '45';
        this.height = '6.6';
        this.party = Socialist
    }

    slogan() {
        console.log('We can make it together')
    }
    handshake() {
        console.log('Hello')
    }



}

console.log(Governor.gethandshake());
console.log(Governor.getslogan());