// function Employee(name, age, baseSalary){
//     this.name = name
//     this.age = age
//     this.baseSalary = baseSalary
//     // here if i have this. is can be called from out side
//     this.monthlyBonus = 1000
//     // here without this. value cannot be called from out side-sticks to value provided within in function
//     //monthlyBonus = 1000

//     this.calculateFinalSalary = function(){
//         let finalSalary = this.baseSalary + this.monthlyBonus
//         console.log ('annaual salary is ' + finalSalary)
//     }

//     this.getEmpDetails = function(){
//         console.log ('Name is ' + this.name + ', Age is ' + this.age + ', base Salary is ' + this.baseSalary)
//     }
// }
// let emp1 = new Employee('john', 25, 2000)
// emp1.getEmpDetails()
// emp1.monthlyBonus = 10000 // this will override value in function - this should be blocked
// emp1.calculateFinalSalary()

function Employee(name, age, baseSalary){
    this.name = name
    this.age = age
    this.baseSalary = baseSalary
    // here without this. value cannot be called from out side-sticks to value provided within in function
    let monthlyBonus = 1000

    // removed this., calculateFinalSalary cannot be called directly from outside
    let calculateFinalSalary = function(){
        let finalSalary = baseSalary + monthlyBonus
        console.log ('Final salary of ' + name + ' is ' + finalSalary)
    }
    this.getEmpDetails = function(){
        console.log ('Age of ' + this.name + ' is ' + this.age)
        calculateFinalSalary() //this will call calculateFinalSalary, when getEmpDetails is called from outside 
    }
}
let emp1 = new Employee('john', 25 , 2000)
emp1.getEmpDetails()
//emp1.calculateFinalSalary() // this will throw error 