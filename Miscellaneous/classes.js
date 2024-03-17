// class Person{
//     constructor(name,age){
//         this.name = name,
//         this.age = age
//     }
//     talk(){
//         console.log(`Hello,I am ${this.name}`);
//     }

// }
// p1 = new person("Rohit",20)
// p1 = new person("prem",25)


// Inheritance

class Person {
    constructor(name, age) {
        console.log("Preson class constructor");
        this.name = name,
            this.age = age
    }
    talk() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
class student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name,age);
        this.marks = marks;
    }
}
class teacher extends Person {
    constructor(name, age, subject) {
        console.log("teacher class constructor");
        super(name,age);
        this.subject = subject;
    }
}

class mammal{
    constructor(name){
        this.name = name;
        this.type = "ward-blooded";
    }
    eat(){
        console.log("I am Eating");
    }
}

class dog extends mammal{
    constructor(name){
        super(name);
    }
    bark(){
        console.log("Bhau-Bhau");
    }
}

class cat extends mammal{
    constructor(name){
        super(name);
    }
    meow(){
        console.log("Meuw-Meuw");
    }
}