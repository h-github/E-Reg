export class Student {
    fname: string;
    lname: string;
    username: string;
    password: string;
    email: string;
    dob: Date;
    address: Address;

    constructor(){}
}

class Address {
    street: string;
    zipcode: string;
    city: string;
    state: string;
    country: string;

    constructor(){}
}