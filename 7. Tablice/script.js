///Zadanie 1
let table=[29,24,1,5,742,12,53,3];
for(let i=0;i<table.length;i++){
    console.log(table[i]);
}

///Zadanie 2
let secondTable=["first",23,5,2,false,"dog",21,75,35]

console.log("Pierwszy i drugi element: \n 1)"+secondTable[0]+"\n 2)"+secondTable[1]);

console.log("Ostatni element:"+secondTable[secondTable.length-1]);

for(i=0;i<secondTable.length;i++){
    console.log(secondTable[i]);
}

for(i=0;i<secondTable.length;i++){
    if(i%2==0){
        console.log(secondTable[i]);
    }    
}
for(i=0;i<secondTable.length;i++){
    if(typeof secondTable[i] === "string" ){
        console.log(secondTable[i]);
    }    
}
for(i=0;i<secondTable.length;i++){
    if(typeof secondTable[i] === "number" ){
        console.log(secondTable[i]);
    }    
}
///Zadanie 3
//1
let thirdTable=[1,34,45,56,67,78,90,123,345]
let sum=0;
for(i=0;i<thirdTable.length;i++){
        sum+=thirdTable[i];
}
console.log("Suma liczb z tablicy równa się: "+sum)
//2
let difference=0;
for(i=0;i<thirdTable.length;i++){
    difference-=thirdTable[i];
}
console.log("Różnica liczb z tablicy równa się: "+difference)

//3
let average=0;
for(i=0;i<thirdTable.length;i++){
        average+=thirdTable[i];
}
console.log("Średnia liczb z tablicy równa się: "+(average/thirdTable.length))

//4
for(i=0;i<thirdTable.length;i++){
    if(thirdTable[i]%2==0){
        console.log(thirdTable[i]);
    }    
}

//5
for(i=0;i<thirdTable.length;i++){
    if(thirdTable[i]%2==1){
        console.log(thirdTable[i]);
    }    
}
//6
function compareNumbers(a, b) {
    return a - b
 }
thirdTable.sort(compareNumbers)
console.log("Największa liczba: "+thirdTable[thirdTable.length-1])

//7
function compareNumbers(a, b) {
    return a - b
 }
thirdTable.sort(compareNumbers)
console.log("Najnajmniejsza liczba: "+thirdTable[0])

//8
for(i=thirdTable.length-1;i>=0;i--){
    console.log(thirdTable[i]);
}

///Zadania 4
let table2=[1,2,3,4,5,6,7,8];
function SumArray(array){
    let result=0;
    for(i=0;i<array.length;i++){
        result+=array[i];
    }
    return result;
}
SumArray(table2);

///Zadanie 5
let table3=[1,2,3,4,5,6,7,8];
function avrArray(array){
    let result=0;
    let avr=0;
    for(i=0;i<array.length;i++){
        result+=array[i];
    }
    avr=result/array.length;
    for(i=0;i<array.length;i++){
        console.log(array[i]*avr);
    }
}
avrArray(table3);

///Zadanie 6
let table4=[1,2,3,4,5,6,7,8];
function avrArray(array){
    let result=0;
    var j=0
    for(i=0;i<array.length;i++){
        if(array[i]%2==0){
            result+=array[i];
            j++;
        }    
    }
    return result/j
}
avrArray(table4);

///Zadanie 7
let table=[29,24,1,5,742,12,53,3];

function sortTable(array){
    array.sort(function(a, b){return a-b});
    console.log(array)
}
sortTable(table);

///Zadanie 8
let table5=[12,345,123,53,12,35,57,234]
let table6=[423,2435,45,567,34,675,57,564]
function indexArray(array1, array2){
    let sumArray = [];

    array1.forEach((element, i) => {
        sumArray.push(element + array2[i]);
    });

    console.log(sumArray);
}
indexArray(table5,table6);

///Zadanie 9
const without = (array, without) => {
    const withoutArray = array.filter((element) => {
      if (element !== without) {
        return element;
      }
    });
    return withoutArray;
  };
  const withoutArray = without([14, 232,46, 3434, 38, 3426, 41, 33, 46, 27, 33], 38);
  console.log(withoutArray);

///Zadanie 10
var table=[2,3,4,-5,-67,8,-9,5]
function reverse(array){
    for(i=0;i<array.length;i++){
        console.log(array[i]*(-1))
    }
}
reverse(table)
