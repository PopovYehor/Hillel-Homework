//обьект
const factory = {
    chekSize: function(size){
       ((this.width+this.height+this.volume)<size) ? true : false
    },
    getPrice: function(){
        return (this.width * this.height) * this.volume
    } 
}

//потомок 1_________________________________________________

const carDepartament = {
    power: '',
    countPower: '',
    car: '',
    productionCar: function(){
        for (let i = 0; i<this.countPower; i++){
        this.power !=0 ? (this.car++, this.power--): (this.car)
        }
        this.countPower = 0
    },
    __proto__: factory,
}

//ребенок 1 потомка 1

const carSalon = {
    countCar: '',
    money: '',
    sellCar: function(){
        for (let i = 0; i<this.countCar; i++){
            this.car !=0 ? ((this.money++), this.car--): this.car
        }
    this.countCar = 0
    },
    __proto__: carDepartament,
}

//ребенок 2 потомка 1

const car = {
    width: '',
    height: '',
    volume: '',
    getFuel: function(){
        this.petrol = (this.width+this.height)*this.volume
    },
    __proto__: carSalon,
}




//потомок 2_____________________________________________________________

const bikeDepartament = {
    productionBike: function(){
        switch(this.wheels){
            case 2: this.width = 2, this.height = 2, this.volume = 5;
            case 3: this.width = 3, this.height = 3, this.volume = 10;
            case 4: this.width = 4, this.height = 4, this.volume = 15;
        }
    },
    __proto__: factory,
}
bikeDepartament.wheels = Math.round(Math.random()*(4-2) + 2)

//ребенок 1 потомка 2

const bikeSalon = {
    saleBike: function(){
        switch(this.wheels){
            case 2: this.money = 10;
            case 3: this.money = 15;
            case 4: this.money = 20;
        }
    },
    __proto__: bikeDepartament,
}

//ребенок 2 потомка 2

const bike = {
    width: '',
    height: '',
    volume: '',
    getSpead: function(){
        this.maxSpead = this.volume * this.wheels
    },
    __proto__: bikeSalon,
}


//потомок 3________________________________________________

const scooterDepartament = {
    batteryPower: '',
    lithium: '',
    scooterOrder: '',
    getPower: function(){
        this.batteryPower = (this.lithium/2)/this.scooterOrder
    },
    __proto__: factory,
}

//ребенок 1 потомка 3

const scooterSalon = {
    getColect: function(){
        return({
            addWidth: (size)=>{ this.width = size},
            addHeight: (size)=>{this.height = size},
            addVolume:(size)=>{this.volume = size},
        })
    },
    __proto__: scooterDepartament,
}
const colect = scooterSalon.getColect()

//ребенок 2 потомка 3

const scooter = {
    getDistance: function(){
        this.maxDistance = ((this.width+this.height)*this.volume)*this.batteryPower
    },
    getName: function(){
        this.name = 'Scooter-'+this.maxDistance
    },
    __proto__: scooterSalon,
}

