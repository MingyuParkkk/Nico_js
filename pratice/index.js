// console.log('Im working. Im JS. Im Beautiful Im worth it');
// alert('Im working. Im JS. Im Beautiful Im worth it');
// const a = 221;
// let b = a - 5;
// console.log(b, a);

// String
//const what = "Nicolas";
// boolean
// const what = true;
// float
// const what = 55.1;
//console.log(what);

/*
//variable
const monday = "Mon";
const tue = "Tue";
const wed = "Wed";
const thu = "Thu";
const fri = "Fri";
console.log(monday, tue, wed, thu, fri);
*/
/*
//array
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(daysOfWeek);
console.log(daysOfWeek[6]);
*/
/*
// object
const nicoInfo = {
  name:"Nico",
  age:"33",
  gender:"Male",
  isHandsome:true,
  favMovies: ["AlongtheGods","LOTR","Oldboy"],
  favFood:[
            {
              name:"Kimchi",
              fatty:false
            },
            {
              name:"CheeseBurger",
              fatty:true
            }
          ]
};
console.log(nicoInfo);
console.log(nicoInfo.gender);
nicoInfo.gender = "Female";
console.log(nicoInfo.gender);
//nicoInfo = true; // error on purpose
*/
/*
//function
function sayHello(name, chicken){
  console.log("Hello!", name, "you have", chicken, "chickens");
}
sayHello("Nicolas", "puradak");
*/
/*
function sayHello(name, age){
  console.log(`Hello ${name} you are ${age} years old`);
}
sayHello("nicolas", 15);
*/
/*
function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello("Nicolas", 22);
console.log(greetNicolas);

const calculator = {
  plus : function(a, b){ return a + b;},
  multiply : function(a, b) { return a * b;},
  divide : function(a, b) { return a / b;},
  minus : function(a, b) { return a - b;},
  power : function(a, b) { return a ** b;}
}

console.log( calculator.plus(5, 5) );
console.log( calculator.multiply(5, 5) );
console.log( calculator.divide(5, 5) );
console.log( calculator.minus(5, 5) );
console.log( calculator.power(5, 5) );
*/

/************************* always use MDN if you wanna findout where the 'event' comes out *************************/

/*
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(255, 0, 0)";
const OTHER_COLOR = "rgb(16, 233, 99)";

function handleClick() {
  const currentColor = title.style.color;
  console.log(currentColor);
  if(currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
    console.log("basecolor");
  }
  else
  {
    title.style.color = BASE_COLOR;
    console.log("othercolor");
  }

}
function init(){
  title.style.color = BASE_COLOR;
  //title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleClick);
}
init();
*/

/*
function handleOffline(){
  console.log("Bye bye");
}
function handleOnline(){
  console.log("Welcome back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
/*
function handleClick(){
  //const currentClass = title.className;
  const hasClass = title.classList.contains(CLICKED_CLASS);
  //console.log(currentClass);

  //if(currentClass !== CLICKED_CLASS);
  if(!hasClass){
    //title.className = CLICKED_CLASS; // for this way : only one class can be assigned
    title.classList.add(CLICKED_CLASS);
    console.log("add");
  }
  else
  {
    //title.className = "";
    title.classList.remove(CLICKED_CLASS);
    console.log("remove");
  }
}
*/
function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick)
}

init();