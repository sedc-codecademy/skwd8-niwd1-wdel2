//this.myVar = 10;
//console.log('This is:', this);

// a normal regular function
function myFunc(x) {
    console.log('This in a normal function, x is', x, this);
}
myFunc(5);


// a constructor function
function Person(name, age) {
    console.log('In Person function', this);
    this.name = name;
    this.age = age;
};
//let john = new Person('John Doe', 55);
//console.log(john);

// call-site of the function
function printName() {
    console.log('(normal) My name is', this.name);
}

const printNameArrow = () => {
    console.log('(arrow) My name is', this.name);
}

const trainer = {
    name: 'Aleksandar Bencun',
    age: 27,
    printName,
    printNameArrow,
    printNameArrowInner: () => {
        console.log('(arrow inner) My name is', this.name);
    }
}

//trainer.printName();
//printName();
trainer.printName();
trainer.printNameArrow();
trainer.printNameArrowInner();

// binding a function with call()
const myObj = {message: 'Hello this!!!'};
//myFunc.call(myObj, 10);

//binding this with bind
const myFuncBound = myFunc.bind(myObj);
//myFuncBound(15);

// classes
class Car {
    constructor(brand, fuelType) {
        this.brand = brand;
        this.fuelType = fuelType;
    }

    printInfo() {
        console.log('Car info', this.brand, this.fuelType);
    }
}
const myCar = new Car('Ford', 'Diesel');
const yourCar = new Car('Mercedes', 'Diesel');
// myCar.printInfo();
// yourCar.printInfo();