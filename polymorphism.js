// class Animal{

//     constructor(name){
//         this.name = name
//     }
//     eats(){
//         console.log (this.name + ' eats food')
//     }
// }
//  let animal1 = new Animal('dog')
//  animal1.eats()
//O/P --- dog eats food

class Animal{
    constructor(name){
        this.name = name
    }
    eats(){
        console.log (this.name + ' eats food')
    }
}

class Alligator extends Animal{
    eats(){
        console.log (this.name + ' eats fishes')
    }
}
let animal1 = new Alligator('alligator')
animal1.eats()
//O/P -- alligator eats fishes