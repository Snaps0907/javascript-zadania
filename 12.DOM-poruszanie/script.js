///Zadanie 1
console.log(document.getElementById("buz").parentElement);

console.log(document.getElementById("baz").previousElementSibling);

console.log(document.getElementById("foo").parentElement.children);

console.log(document.getElementById("foo").parentElement);

console.log(document.getElementById("foo").firstElementChild);

const child = document.getElementById("foo").children;
console.log(child[(child.length - 1) / 2]);

///Zadanie 2
const addListener = (element) => {
  element.addEventListener("click", function () {
    console.log(this.firstElementChild.innerText.trim());
  });
};

addListener(document.getElementById("ex2"));

///Zadanie 3
const addEventOnButtons = () => {
  const buttons = document.getElementById("ex3").getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      changeParentColor(this.parentElement);
      const span = this.parentElement.getElementsByTagName("span")[0];
      span.style.display =
        span.style.display === "inline-block" ? "none" : "inline-block";
    });
  }
};

addEventOnButtons();

/// Zadanie 4
const changeParentColor = (parent) => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  parent.style.backgroundColor = randomColor;
};

///Zadanie 5

//1
const firstElement = (currentColor, elements) => {
  elements[0].style.backgroundColor = currentColor;
};
//2
const lastElement = (currentColor, elements) => {
  elements[elements.length - 1].style.backgroundColor = currentColor;
};
//3
const evenElements = (currentColor, elements) => {
  for (let i = 0; i < elements.length; i += 2) {
    elements[i].style.backgroundColor = currentColor;
  }
};
//4
const allElements = (currentColor, elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = currentColor;
  }
};
//5
const container = (currentColor, elements) => {
  elements[0].parentElement.style.backgroundColor = currentColor;
};

const lightElements = () => {
  const parent = document.getElementById("ex5");
  const colouredDivs = parent.getElementsByTagName("div");

  for (let i = 0; i < colouredDivs.length; i++) {
    colouredDivs[i].addEventListener("mouseenter", function () {
      const currentColor = this.style.backgroundColor;
      const liElements = parent.getElementsByTagName("li");
      //firstElement(currentColor, liElements);
      lastElement(currentColor, liElements);
      //lastElement(currentColor, liElements);
      //evenElements(currentColor, liElements);
      //container(currentColor, liElements);
    });
  }
};

lightElements();

///Zadanie 6

const parrent = document.getElementById("ex6");

//1
const first = parrent.firstElementChild.firstElementChild.firstElementChild;

//2
const second = parrent.firstElementChild.parentElement.firstElementChild.firstElementChild
  .nextElementSibling.parentElement;

//3
const third = parrent.parentElement.firstElementChild.parentElement.children[1]
  .firstElementChild.firstElementChild.firstElementChild;

console.log(first);
console.log(second);
console.log(third);
