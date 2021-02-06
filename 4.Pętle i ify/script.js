//Zadanie 1

let firstNumber=4;
let secondNumber=6;
if(firstNumber>secondNumber){
    console.log(firstNumber+" jest wieksza niż "+secondNumber);
}else if (firstNumber==secondNumber){
    console.log("Liczby są równe.")
}else{
    console.log(console.log(secondNumber+" jest wieksza niż "+firstNumber));
}

//Zadanie 2
let firstNumber=6;
let secondNumber=9;
let thirdNumber=14;

if(firstNumber>secondNumber && firstNumber>thirdNumber){
    console.log(firstNumber+" jest największą liczbą.");
}else if(secondNumber>firstNumber && secondNumber>thirdNumber){
    console.log(secondNumber+ " jest największą liczbą.")
}else{
    console.log(thirdNumber+ " jest największą liczbą." )
}


//Zadanie 3

for(let i=0;i<10;i++){
    let text="Lubię JavaScript";
    console.log(text);
}

//Zadanie 4

let result=0;
for(let i=1;i<=10;i++){
    result+=i;
}
console.log(result);

//Zadanie 5

let n=5;
for(let i=0;i<=n;i++){
    if(i%2==0){
        console.log(i+" - parzysta");
    }else{
        console.log(i+" - nieparzysta");
    }
}

//Zadanie 6

for(let i=0;i<10;i++){
    for(let j=0;j<6;j++){
        console.log("i= "+i+", j= "+j);
    }
}

//Zadanie 7

for(let i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("Fizz Buzz");
    }else if(i%3==0){
        console.log("Fizz")
    }else if(i%5==0){
        console.log("Buzz")
    }else{
        console.log(i)
    }
}

//Zadanie 8

//a)

let star="*";
let height=5;
for(let i=1;i<=height;i++){
    let result="";
    for(let j=0;j<i;j++){
        result+=star;
    }
    console.log(result);
}

//b)

let star="*";
let space=" ";
let height=6;
for(let i=1;i<=height;i++){
    let result=" ";
    let n=height;
    do{
        result+=space;
        n--;
    }while(n>=i)
    for(let j =0;j<i-3;j++){
        result+=star;
        result+=space;
    }
    console.log(result);
}



//c)

let star="*";
let space=" ";
let height=6;
for(let i=1;i<=height*2;i+=2){
    let result=" ";
    let n=height*2;
    do{
        result+=space;
        n--;
    }while(n>=i)
    for(let j =0;j<i;j++){
        result+=star;
        result+=space;
    }
    console.log(result);
}

//d)

for(let i=1;i<=5;i++){
    let result="";
    let n=1;
    do{
      result+=star;
      n++;
    }while(n<=i)
      for(let j=i;j<=4;j++){
        result+=j;
      }
    console.log(result);
  }
  console.log("-----");
  for(let i=5;i>=1;i--){
    let result="";
    let n=1;
    do{
      result+=star;
      n++;
      }while(n<=i);
    for(let j=i;j<=4;j++){
       result+=j;
    }
    console.log(result);
  }

//e)

let star="*";
let space=" ";
let height=5;
for(let i=1;i<=height;i++){
    let result=" ";
    let n=height;
    do{
        result+=space;
        n--;
    }while(n>=i)
    for(let j =0;j<i;j++){
        result+=star;
        result+=space;
    }
    console.log(result);
    
}
for (let i=1;i<=3;i++){
    let result=" ";
    let n=height;
    for(let k=0;k<height;k++){
        result+=space;   
    }
    for(let j =0;j<1;j++){
        result+=star;
    }
    console.log(result);
}

