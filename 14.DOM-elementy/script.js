///Zadanie 1
const getTags = (elements) => {
  const tags = [];
  for (let i = 0; i < elements.length; i++) {
    tags.push(elements[i].tagName);
  }
  return tags;
};

const tagsArray = getTags(document.getElementsByClassName("more-divs"));
console.log("Tagi: ", tagsArray);

///Zadanie 2
const showElements = (element) => {
  console.log("Wewnętrzny: ", element.innerHTML);
  console.log("Zewnętrzny: ", element.outerHTML);
  console.log("Klasy string: ", element.className);
  console.log("Klasy array: ", element.classList);
  console.log("Dataset: ", element.dataset);
};

showElements(document.getElementsByClassName("short-list")[0]);

/// Zadanie 3
const calc = (element) => {
  const dataAttr = element.dataset;
  let add = 0;
  let sub = 0;

  for (key in dataAttr) {
    if (!isNaN(parseInt(dataAttr[key]))) {
      add += parseInt(dataAttr[key]);
      sub -= parseInt(dataAttr[key]);
    }
  }

  return {
    add: add,
    sub: sub,
  };
};

const result = calc(document.getElementById("datasetCheck"));
console.log(`Dodawanie: ${result.add}, odejmowanie: ${result.sub}`);

///Zadanie 4
document.getElementById("spanText").innerText = "zmieniony tekst";

///Zadanie 5
document.getElementById("spanText").className = "nowa_klasa test itp";

///Zadanie 6
const elementsClass = (element) => {
  const classes = [];

  for (let i = 0; i < element.length; i++) {
    classes.push(element[i]);
    console.log(element[i]);
  }

  console.log(classes.join("+"));
};

elementsClass(document.getElementById("classes").classList);

try {
  document.getElementById("classes").classList = [];
  console.log("Usunięto wszystkie klasy");
} catch {
  console.log("Nie Usunięto wszystkich klas");
}

/// Zadanie 7
const addData = (elements) => {
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    if (!elements[i].dataset["data-text"]) {
      elements[i].setAttribute("data-text", "text");
    }
  }
};

const li = document.getElementById("longList").getElementsByTagName("li");
addData(li);

///Zadanie 8
const buildElement = (name) => {
  const objectName = {
    newClass: name,
  };
  addClass(objectName);
};

const addClass = (objectName) => {
  const className = objectName.newClass;
  document.getElementById("myDiv").classList.add(className);
};

buildElement("new_class");

///Zadanie 9
const addClass = (number) => {
  if (number % 2 === 0) {
    document.getElementById("numbers").className = "even";
  } else {
    document.getElementById("numbers").className = "odd";
  }
}
addClass(Math.floor(Math.random() * 11));

///Zadanie 10
const elementsValues = (element) => {
  const children = element.children;
  const array = [];

  for (let i = 0; i < children.length; i++) {
    array.push(children[i].textContent);
  }

  return array;
}

const table = elementsValues(document.getElementById("longList"));
console.log("Tablica z wartościami: ", table);

/// Zadanie 11
const changeAttrAndSaveOld = (elements) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("data-old-text", elements[i].textContent);
    elements[i].innerText = Math.floor(Math.random() * 11);
  }
}

changeAttrAndSaveOld(document.getElementById("longList").children);
