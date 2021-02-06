///Zadanie 1

const list=document.getElementsByClassName("list");
console.log(list);

//Zadanie 2 

function giveTags(tag){
    const tagsElements=document.getElementsByTagName(tag);
    console.log(tagsElements);
}
giveTags("div");
giveTags("span");

//Zadanie 3

const idList = document.getElementById("list");
console.log(idList);

//Zadanie 4

function show(e){
    console.log(e);
}
// 1
show(document.getElementsByTagName("li"));
// 2
show(document.getElementsByTagName("ul"));
// 3
show(document.getElementsByTagName("span"));
// 4
show(document.querySelectorAll('div.list span'));
// 5
show(document.querySelectorAll('div#spans span'));
