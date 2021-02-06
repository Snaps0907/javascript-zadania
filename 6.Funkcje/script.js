//Zadanie 1

function goodJob(){
    console.log("Udało się!");
}
goodJob();

//Zadanie 2

function param(e){
    console.log(e);
}
param(4);

//Zadanie 3

function showTable(table){
console.log(table);
} 
showTable([1,2,3,45,6])

//Zadanie 4 

function showString(string){
    let i = 0;
    var inter =setInterval(() => {
    i++;
    console.log(string);

    if (i >=5) {
        clearInterval(inter);
        console.log("Koniec.")
    }
}, 3000);
}

showString("Ala ma kota.")
