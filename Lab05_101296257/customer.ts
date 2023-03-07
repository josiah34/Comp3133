export class Customer3 {
    private firstName: string;
    private lastName: string;
    private age: number;


    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public greeter() {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    }

    public getAge() {
        return this.age;
    }

}


