// class Employee{
//     setDetails(name, id){
//         this.name = name
//         this.id = id

//     }

// }
// let emp1 = new Employee()
// emp1.setDetails('john', 213)
// console.log(emp1.name)
// console.log(emp1.id)
// ---- with using default constructor ----
class Employee{
    constructor(name, id){
        this.name = name
        this.id = id
    }
}
let emp1 = new Employee('john', 123)
let emp2 = new Employee('mat', 112)

console.log(emp1.name)
console.log(emp2.name)