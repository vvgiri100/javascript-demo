class car{
    setNmae(name){
        this.name = name
    }

    startEngine(){
        console.log('engine started of car ' + this.name)
    }

    stopEngine(){
        console.log('engine stopped of car ' + this.name)
    }
}

class Toyota extends car{

    carspeed(speed){
        console.log("top speed of car "+ this.name + ' is ' + speed)
    }
}

let cardetails = new Toyota()
cardetails.name = 'Camry'
cardetails.startEngine()
cardetails.stopEngine()
cardetails.carspeed(500)