///Zadanie 1

//1
document.getElementById("test-event").addEventListener("click", function (e) {
    console.log(e); 
  });

//2
window.addEventListener("mousemove", function (event) {
   console.log(event); 
 });

//3
document.getElementById("test-event").addEventListener("mouseenter", function (e) {
    console.log(e); 
  });

//4
window.addEventListener("keydown", function (e) {
  console.log(e); 
});

//5
 window.addEventListener("scroll", function (e) {
   console.log(e); 
 });

//6
document.getElementById("input-test").addEventListener("input", function (e) {
    console.log(e);
  });

///Zadanie 2
function ex2Click(event) {
  const text = event.target.attributes["data-text"].nodeValue;
  event.target.nextElementSibling.innerText = text;
}
document.getElementById("ex2").addEventListener("click", ex2Click);

///Zadanie 3
function colorChange(event) {
  if (event.type === "mouseleave") {
    event.target.style.backgroundColor = "red";
    return;
  }
  event.target.style.backgroundColor = "blue";
}
document.getElementById("ex3").addEventListener("mouseenter", colorChange);
document.getElementById("ex3").addEventListener("mouseleave", colorChange);

///Zadanie 4
function valid(e) {
  if (!isNaN(e.data)) {
    document.getElementById("ex3-err").innerText = "NIe można wpisywać numerów";
  }
}
document.getElementById("input-test").addEventListener("input", valid);

///Zadanie 5
let counter = 0;
function counterFunction() {
  if (counter >= 10) {
    document.getElementById("ex5-button").removeEventListener("click", counterFunction);
  } else {
    counter++;
    this.parentElement.getElementsByTagName("span")[0].innerText = counter;
  }
}

document.getElementById("ex5-button").addEventListener("click", counterFunction);

///Zadanie 6
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

///Zadanie 7

let result = 0;
let current = "";

function showResult() {
  current = "";
  document.getElementById("calculator").getElementsByTagName("input")[0].value = result;
}

function checkCalc() {
  if (isNaN(parseInt(current))) {
    return false;
  }
  return true;
}

function calculation(event) {
  const target = event.target.textContent;
  switch (target) {
    case "+":
      if (checkCalc()) {
        result += parseInt(current);
        showResult();
      }
      break;
    case "-":
      if (checkCalc()) {
        result -= parseInt(current);
        showResult();
      }
      break;
    case "*":
      if (checkCalc()) {
        result *= parseInt(current);
        showResult();
      }
      break;
    case "/":
      if (checkCalc()) {
        result /= parseInt(current);
        showResult();
      }
      break;
    default:
      current += target;
      break;
  }
}

const buttons = document.getElementById("calculator").getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calculation);
}
