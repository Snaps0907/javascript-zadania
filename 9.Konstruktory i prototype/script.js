///Zadanie 1

function Person(name,surname,age,country,city,language){
    this.name=name;
    this.surname=surname;
    this.age=age;
    this.country=country;
    this.city=city;
    this.language=language;
    this.changeCityandAge=function(city,age){
        this.city=city;
       this.age=age;
    }
}

var person1=new Person("Jan","Kowalski",34,"Poland","Warsaw","Polish");
var person2=new Person("John","Stivens",27,"USA","Washington","English");
var person3=new Person("Kamil","Nowak",18,"Poland","Cracow","Polish");
var person4=new Person("Bob","Wellington",46,"Great Britain","London","English");
var person5=new Person("Sasha","Tetilov",34,"Russia","Moscow","Russian");

person1.changeCityandAge("Cracow",24);
person2.changeCityandAge("New York",26);
person3.changeCityandAge("Warsaw",54);
person4.changeCityandAge("Liverpool",61);
person5.changeCityandAge("Workuta",22);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

///Zadanie 2
function Calculator(add, sub, div, mul, clear) {
    this.memory = [];

    this.add = function(a,b){
        this.memory.push(`${a} + ${b} = ${a + b}`);
        return a + b;
    }

    this.sub = function(a,b){
        this.memory.push(`${a} - ${b} = ${a - b}`);
        return a - b;
    }
    
    this.mul = function(a,b){
        this.memory.push(`${a} * ${b} = ${a * b}`);
        return a * b;
    }

    this.div = function(a,b){
        this.memory.push(`${a} / ${b} = ${a / b}`);
        return a / b;
    }

    this.print = function (){
        for (index in this.memory) {
            console.log(this.memory[index]);
        }
    }

    this.clear = function(){
        console.log('Czyszczenie pamięci');
        this.memory = [];
    }

}

const calc1 = new Calculator();
const calc2 = new Calculator();
calc1.add(3,4);
calc1.sub(55,2);
calc2.mul(12,4);
calc2.div(32,8);

calc1.print();
calc1.clear();

///Zadanie 3

function Example() {
    
    this.setNumber = function() {
        this.number = Math.floor(Math.random() * 10);
        this.checkNumber();
    }

    this.checkNumber = function() { 
        console.log(this.number);
        if(this.number > 5){
            clearInterval(myInterval);
        }
    }

}

const newProgram = new Example();

const myInterval = setInterval(() => {

}, 1000);
