//Zadanie 1
var car={
    name:"Audi",
    color:"blue",
    type:"sedan",
    hp:120,
    doors:5,
    petrolType:"diesel"
}
console.log(car.name +" | "+car.color +" | "+car.type +" | "+car.hp +" | "+car.doors +" | "+car.petrolType);

//Zadanie 2

var car={
    name:"Audi",
    color:"blue",
    type:"sedan",
    hp:120,
    doors:5,
    petrolType:"diesel",
    nameChange: function(e){
        this.name=e;
    }
}
car.nameChange("BMW");
console.log(car);

//Zadanie 3

var calc={
    result:0,
    sum:function(table){
        for(let i=0;i<table.length;i++){
            this.result+=table[i];
        }
    }
}
calc.sum([1,2,3,4,13,43,5]);
console.log(calc.result);

//Zadanie 4

var car={
    name:"BMW",
    age:12,
    color:"black"
}
for (const key in car) {
    console.log( key,":",car[key]);  
}

//Zadanie 5

var car={
    name:"Audi",
    age:10,
    color:"black",
    driver:{
        name:"Jason",
        age:34,
        eyesColor:"blue"
    }
}

for (const key in car.driver){
    console.log(key,":",car.driver[key]);
}
console.log(car.driver);

//Zadanie 6 
var car={
    name:"Audi",
    age:10,
    color:"black",
    driver:{
        name:"Jason",
        age:34,
        eyesColor:"blue"
    }
}
car.type="sedan";
car.sound= function(){
    return "Brum Brum";
}
