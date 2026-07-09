//https://www.youtube.com/watch?v=hY7YQxh4qyg&list=PLhW3qG5bs-L9MspCEDoTa4TuGJ3K9k9F_&index=24

let EmpDetails = function(name, age){
    this.name = name
    this.age = age
}

EmpDetails.prototype.getName = function(){
    return this.name

}

EmpDetails.prototype.getAge = function(){
    return this.age
}

let emp1 = new EmpDetails('john', 25)
let emp2 = new EmpDetails('tom', 40)
console.log (emp1.getName())
console.log (emp2.getAge())