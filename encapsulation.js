class Employee{
    setEmpDetails(name, ID, PhoneNo){
        this.name = name
        this.ID = ID
        this.PhoneNo = PhoneNo
}
    getEmpName(){
        return this.name
    }
    getEmpID(){
        return this.ID
    }
    getEmpPhoneNo(){
        return this.PhoneNo
    }
}

let emp1 = new Employee()
emp1.setEmpDetails('john', 123, 199999)
let emp2 = new Employee()
emp2.setEmpDetails('max', 234, 299999)

console.log(emp1.getEmpName())
console.log(emp1.getEmpID())
console.log(emp1.getEmpPhoneNo())

console.log(emp2.getEmpName())
console.log(emp2.getEmpID())
console.log(emp2.getEmpPhoneNo())
