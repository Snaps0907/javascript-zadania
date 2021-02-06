///Zadanie 1

var person={
    name:"Slawek",
    surname:"Nowak",
    age:23,
    country:"Poland",
    city:"Warsaw"
}
var person2={
    name:"Sasha",
    surname:"Koval",
    age:56,
    country:"Russia",
    city:"Moscow"
}
function personInfo(){
    console.log("Info: "+this.name+", "+this.surname+", "+this.age+", "+this.country+", "+this.city);
}
function addAge(){
    this.age++;
}

person.personInfo = personInfo;
person.addAge = addAge;

person.personInfo();

person.addAge();
person.addAge();
console.log("person.age: ", person.age);

person2.personInfo = personInfo;
person2.addAge = addAge;

person2.personInfo();

person2.addAge();
person2.addAge();
person2.addAge();
person2.addAge();

console.log("person2.age: ", person2.age);


///Zadanie 2

person.favouriteMeal = [];
person2.favouriteMeal = [];

function showMeal() {
    console.log("Ulubione posiłki: ", this.favouriteMeal.join(", "));
  }
  
  function addMeal(meal) {
    this.favouriteMeal.push(meal);
  }
  
  person.showMeal = showMeal;
  person.addMeal = addMeal;

  
  person.addMeal("naleśniki");
  person.addMeal("zupa pomidorowa");
  person.addMeal("pierogi z mięsem");
  person.showMeal();

  person2.showMeal = showMeal;
  person2.addMeal = addMeal;

  person2.addMeal("spagetti");
  person2.addMeal("smażony dorsz");
  person2.addMeal("zupa ogórkowa");
  person2.showMeal();

/// Zadanie 3
const calc = {
  a: 0,
  b: 0,
  numbers: function (a, b) {
    this.a = a;
    this.b = b;
  },
  add: function () {
    console.log("adding: ", this.a + this.b);
  },
  mul: function () {
    console.log("multiplication: ", this.a * this.b);
  },
  sub: function () {
    console.log("subtraction: ", this.a - this.b);
  },
  div: function () {
    if (this.b === 0) {
      console.log("Can't division by 0");
    } else {
      console.log("division: ", this.a / this.b);
    }
  },
};
calc.numbers(13, 0);
calc.div();
calc.numbers(24, 6);
calc.add();
calc.mul();
calc.div();
calc.sub();

///Zadanie 4
const ladder = {
  level: 0,
  minLevel: 0,
  maxLevel: 10,
  rung: "|===|",
  current: "|=*=|",
  position: function () {
    for (let i = 9; i >= 0; i--) {
      if (i === this.level) {
        console.log(this.current);
      } else {
        console.log(this.rung);
      }
    }
  },
  down: function () {
    if (this.level > this.minLevel) {
      this.level--;
    }
    console.log("\nGo down:");
    this.position();
  },
  up: function () {
    console.log("\nGo up:");
    if (this.level < this.maxLevel) {
      this.level++;
    }
    this.position();
  },
};

const moves = [
  "up",
  "up",
  "down",
  "up",
  "up",
  "up",
  "down",
  "down",
];

let move = 0;
ladder.position();
const interval = setInterval(() => {
  ladder[moves[move]]();
  if (move >= 9) {
    clearInterval(interval);
  }
  move++;
}, 3000);

  
