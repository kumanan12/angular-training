class Person {
    firstName: string;
    lastName: string;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getName1() {
        return `${this.firstName} ${this.lastName}`;
    }
}