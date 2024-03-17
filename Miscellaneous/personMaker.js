// function personMaker(name,age){
//     const person ={
//         name: name,
//         age : age,
//         talk() {
//             console.log(`Hello, I'm ${this.name}`)

//         },
//     };
//     return(person);

// }
function person(name,age){
    this.name = name,
    this.age = age;

}
person.prototype.talk = function(){
    console.log(`Hi, i'm ${this.name}`)
}
p1 = new person("rohit",20);
p2 = new person("sumit",21)