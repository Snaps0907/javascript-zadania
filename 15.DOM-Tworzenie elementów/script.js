///Zadanie 1
const div = document.createElement("div");
div.innerText = "To jest nowy element";
document.body.appendChild(div);

///Zadanie 2 
const ul = document.createElement("ul");
ul.setAttribute("id", "fruits");
const fruits = [
  "gruszka",
  "pomarańcza",
  "kiwi",
  "jabłko",
  "truskawka",
  "malina",
  "arbuz",
];
fruits.forEach((element) => {
  const li = document.createElement("li");
  li.innerText = element;
  ul.appendChild(li);
});
document.body.appendChild(ul);

///Zadanie 3
document.body.addEventListener('click', function () {
    const list = document.getElementById("fruits").children;
    for(i=0;i<list.length;i+=2){
        list[i].remove();
    }
});

///Zadanie 4
const button = document.createElement('button');
button.innerText = 'Klick';
document.body.appendChild(button);

button.addEventListener('click', function (e) {
    this.remove();
});

///Zadanie 5
const number = Math.floor(Math.random() * 11);

for (let i = 0; i < number; i++) {
  const div = document.createElement("div");
  div.innerText = `div numer ${i + 1}`;

  document.body.appendChild(div);
}

///Zadanie 6
const htmlObject = {
  div1: 'to jest div ',
  span1: 'to jest span',
  div2: {
      div3: 'to jest div',
  },
  span2: 'to jest span',
}

const newDiv1 = document.createElement('div');
newDiv1.innerText = htmlObject.div1;

const newSpan1 = document.createElement('span');
newSpan1.innerText = htmlObject.span1;

document.body.appendChild(newDiv1);
document.body.appendChild(newSpan1);

const newDiv2 = document.createElement('div');
const newDiv3 = document.createElement('div');
newDiv3.innerText = htmlObject.div2.div3;

const newSpan2 = document.createElement('span');
newSpan2.innerText = htmlObject.span2;

newDiv2.append(newDiv3);
document.body.appendChild(newDiv2);
document.body.appendChild(newSpan2);


///Zadanie 7
const List = [
  "pierwszy",
  "drugi",
  "trzeci",
  "czwarty",
  "piąty",
  "szósty",
  "siódmy",
];
const List2 = [];

const firstList = document.createElement("ul");
const secondList = document.createElement("ul");
const firstButton = document.createElement("button");
const secondButton = document.createElement("button");

firstButton.innerText = "Przenieś w górę";
secondButton.innerText = "Przenieś w dół";

firstButton.addEventListener("click", () => {
  List.push(List2[List2.length - 1]);
  List2.pop();

  createDOMElements();
});

secondButton.addEventListener("click", () => {
  List2.push(List[List.length - 1]);
  List.pop();

  createDOMElements();
});

const disabledButtons = () => {
  if(List2.length > 0)
  {firstButton.removeAttribute("disabled")
}else{firstButton.setAttribute("disabled", true);}  

  if(List.length > 0)
  {secondButton.removeAttribute("disabled")
}else{secondButton.setAttribute("disabled", true);}
    
};

const createDOMElements = () => {
  firstList.innerHTML = "";
  secondList.innerHTML = "";

  createListElements(List, firstList, firstButton);
  createListElements(List2, secondList, secondButton);
  disabledButtons();
};

const createListElements = (list, domElement) => {
  list.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    domElement.appendChild(li);
  });
};

document.body.append(firstList);
document.body.append(firstButton);
document.body.append(secondList);
document.body.append(secondButton);

createDOMElements();

///Zadanie 8
const info = document.createElement("div");
info.style.display="block";
info.innerText =
  "Dodaj elementy do strony: (rodzaj; tekst; kolor; ilość)";
document.body.append(info);

const type = document.createElement("input");
type.setAttribute("type", "text");
type.setAttribute("placeholder", "rodzaj znacznika");
document.body.append(type);
const text = document.createElement("input");
text.setAttribute("type", "text");
text.setAttribute("placeholder", "tekst");
document.body.append(text);
const color = document.createElement("input");
color.setAttribute("type", "color");
document.body.append(color);
const number = document.createElement("input");
number.setAttribute("type", "number");
number.setAttribute("placeholder", "ilość");
document.body.append(number);

const button = document.createElement("button");
button.innerText = "Dodaj do strony";
button.addEventListener("click", function () {
  const count = number.value;
  for (let i = 0; i < count; i++) {
    let newElement = null;
      newElement = document.createElement(type.value);
      newElement.style.color = color.value;
      newElement.innerText = text.value+"\n";
      document.body.appendChild(newElement)
    if (newElement) {
      document.body.appendChild(newElement);
    }
  }
});
document.body.append(button);

///Zadanie 9
const details = ["imie", "nazwisko", "wiek", "dzieci"];
const mainwrapper = document.createElement("div");

const buttonMore = document.createElement("button");
const buttonCreate = document.createElement("button");
buttonMore.textContent = "wiecej";
buttonCreate.textContent = "uwtorz";
buttonMore.id = "more";
buttonCreate.id = "create";

details.forEach( (item) => {
    const wrapper = document.createElement("div");
    const textDiv = document.createElement("div");
    const input = document.createElement("input");
    input.className = item;
    const br = document.createElement("br");
    textDiv.textContent = item;
    wrapper.appendChild(textDiv);
    wrapper.appendChild(input);
    wrapper.appendChild(br);

    mainwrapper.appendChild(wrapper)
})

document.body.appendChild(mainwrapper);
document.body.appendChild(buttonMore);
document.body.appendChild(buttonCreate);

buttonMore.addEventListener("click", () => {
    details.forEach( (item) => {
        const wrapper = document.createElement("div");
        const textDiv = document.createElement("div");
        const input = document.createElement("input");
        input.className = item;
        const br = document.createElement("br");
        textDiv.textContent = item;
        wrapper.appendChild(textDiv);
        wrapper.appendChild(input);
        wrapper.appendChild(br);
        mainwrapper.appendChild(wrapper)
    })
})

function createButtonDelate(){
    const button = document.createElement("button");
    button.textContent ="usun";

    button.addEventListener("click", (e) => {
        const target = e.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    })

    return button;
}


function createField(fieldName, text){
    const buttonDelate = createButtonDelate();
    const wrapper = document.createElement("div");
    const fieldDiv = document.createElement("div");
    const fieldValue = document.createElement("div");
    fieldDiv.textContent = fieldName + ": ";
    fieldValue.textContent = text;
    fieldValue.classList = "fieldValue";
    wrapper.appendChild(fieldDiv);
    wrapper.appendChild(fieldValue);
    wrapper.appendChild(buttonDelate);

    

    return wrapper;
}

buttonCreate.addEventListener("click", () => {
    const name = document.querySelectorAll(".imie");
    const lastname = document.querySelectorAll(".nazwisko");
    const age = document.querySelectorAll(".wiek");
    const kids = document.querySelectorAll(".dzieci");

    const wrapper = document.createElement("div");

    for (let index = 0; index < name.length; index++) {
        const fieldName = name[index].value;
        
        const element = createField("imie", fieldName);
        wrapper.appendChild(element);
    }


    for (let index = 0; index < lastname.length; index++) {
        const fieldName = lastname[index].value;

        const element = createField("nazwisko", fieldName);
        wrapper.appendChild(element);
    }


    for (let index = 0; index < age.length; index++) {
        const fieldName = age[index].value;

        const element = createField("wiek", fieldName);
        wrapper.appendChild(element);
    }
    
    for (let index = 0; index < kids.length; index++) {
        const fieldName = kids[index].value;

        const element = createField("ilosc dzieci", fieldName);
        wrapper.appendChild(element);
    }

    document.body.appendChild(wrapper);
})

///zadanie 10

function uppercaseFistLetter(value ) {
    return value.charAt(0).toUpperCase() + value.slice(1)
}
const buttonUppercase = document.createElement("button");
buttonUppercase.textContent = "powieksz 1 litere"
document.body.appendChild(buttonUppercase)

buttonUppercase.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".fieldValue");
    
    [...inputs].forEach((item) => {
      console.log(item.innerHTML);
        item.innerHTML = uppercaseFistLetter(item.innerHTML);
      });
})

///Zadanie 11

function findAndCreate(text) {
  const numbers = text.match(/[0-9]+/g);

  if (numbers.length > 0) {
    const convertedNumbers = numbers.map((item) => Number(item));
    const sumNumbers = convertedNumbers.reduce((x, y) => x + y);
    console.log(sumNumbers);
    const multiNumbers = convertedNumbers.reduce((x, y) => x * y);

    for (let i = 0; i < multiNumbers; i++) {
      const div = document.createElement("div");
      div.textContent = text;
      document.body.appendChild(div);
    }
  }
}
findAndCreate("4asd3d1");

///Zadanie 12
function createObject(input) {
  return {
      text: input
  }
}

const obj = createObject("Michał kubi jeździć na rowerze.");
obj.check = function() {
  if(this.text.includes("Ala")){
      this.text = this.text.replaceAll("Ala", "Ola");
      console.log(this.text);
  } else {
      const div = document.createElement("div");
      div.textContent = "Słowo Ala nie występuje w tekście."
      document.body.appendChild(div);
  }
}
obj.check();

///Zadanie 13
const exampleArray = ["sdd412ds","23xcs33"];

function sumLetters(value){
    let numbers = 0;

    value.forEach(item => {
        const textWithoutNumbers = item.replace(/\d+/g, "");
        numbers += textWithoutNumbers.length;
    })
    console.log(numbers);
}

sumLetters(exampleArray);

function sumNumbers(value){
    let sum = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {
            sum+=(Number(number));
        })  
    })
    console.log(sum);
}
sumNumbers(exampleArray)

function averageNumbers(value){
    let sum = 0;
    let letters = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach( number => {
            sum+=(Number(number));
            letters = number.length;
        })      
    })
    const average = sum/letters;
    console.log(average);
    return average;  
}
averageNumbers(exampleArray)

/// Zadanie 14
let exampleObject = {
  name: '',
  surname: '',
  age: ''
}

function changeObject(name, surname, age){
  exampleObject.name = name;
  exampleObject.surname = surname;
  exampleObject.age = age;

  if(name.length > 5 || surname.length > 5 || age.length > 5){
      const button = document.createElement("button");
      button.textContent = "Reset";
      button.addEventListener("click", () => {
          exampleObject.name = "";
          exampleObject.surname = "";
          exampleObject.age = "";
      })
      document.body.appendChild(button);
  }
  console.log(`Imie: ${exampleObject.name} , Nazwisko: ${exampleObject.surname} , Wiek: ${exampleObject.age}`)
}

changeObject("Johnatan", "Smith", "25");
