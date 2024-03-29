// Class Constructor

/*class Book{
    constructor(BookName, Price){
        this.BookName = BookName;
        this.Price = Price;
    }
}

let BookDetails = new Book("Opekkha", "500 Tk");
console.log(BookDetails);*/

// Class Expression

/*let person = class {
    constructor(name,age,profe){
        this.name = name;
        this.age = age;
        this.profe = profe;
    }
}

let newPerson = new person("Sabbir Sun" , "23" , "Programmer");
console.log(newPerson);*/

// Static Method

/*class Book{
    static fun() {// class name diye static er vitore function call kora
        console.log("Sabbir Sun");
    }
}
Book.fun();*/

// Inheritance & Super

/*class parent{
    Assests1(){
        console.log("This is my grandfather's property");
    }
    Assests2(){
        console.log("This is my father's property");
    }
}

class Ami extends parent{// extends er maddhome bap dadar property qke call kore
    // MyAssests(){
    //     super.Assests1();
    //     super.Assests2();
    // }
}
let MyAssests = new Ami();
MyAssests.Assests1();
MyAssests.Assests2();*/

// Arrow function

/*let fun = function(x,y){
    return x + y;
}
console.log(fun("a","b"));

let func = x => x + 20;
console.log(func(20));

let fun = (x,y) => {

}
console.log(fun(50,30));*/

// ES6 Symbols

/*let Sym = Symbol("Sabbir"); // More parts in YT Tutorial
let Sym1 = Symbol("Sabbir");
console.log(Sym===Sym1);*/

// Iterators

/*// let array = ['a','b','c','d','e']; // More parts in YT Tutorial
// for(let i = 0; i <array.length; i++){
//     console.log(array[i]);
// }

let array = ['a','b','c','d','e'];
for(Element of array){
    console.log(Element);
}*/

/*// Strict Mode --> vul code detect kore Solve code dey

//"use strict"
let name = 20;
console.log(name);

function Hello(){
    num = 20;
}
Hello();*/

// ForEach()
// let Sun = [1,2,3,4,5];

// for(let i = 0; i < Sun.length; i++){
//     console.log(Sun[i]);
// }
// let Sun1 = [1,2,3,4,5];
// for(Sun of Sun1){
//     console.log(Sun);
// }

/*let Sun3 = [1,2,3,4,5];
Sun3.forEach((x) => console.log(x));
// Sun3.forEach(myFun)

// function myFun(z){
//     console.log(z);
// }*/

// ES6 Map Function

/*// let Sun = [1,2,3,4,5];
// let Sun1 = [];

// Sun.forEach(myFun)

// function myFun(x){
//     Sun1.push(x*2);
// }
// console.log(Sun1);

let Sun = [1,2,3,4,5];
let Sun1 = Sun.map(myFun);

function myFun(x){
    return x*2;
}
console.log(Sun1);*/

// Array Function Filter()

/*let Sun = [1,2,3,4,5];
let Sun1 = Sun.filter(myFun);
function myFun(x){
    return x < 3;
}
console.log(Sun1);*/

// ES6 Asynchonous

/*let fun1 = () => {
    console.log("fun1");
}
let LoadingTime = () => {
    console.log("fun2");
}
let fun2 = () => {
    setTimeout(LoadingTime, 2000); // 2 sec pore show korbe
}
let fun3 = () => {
    console.log("fun3");
}
fun1()
fun2()
fun3()*/

// ES6 Callback and Higher Order Function

/*let Display = (Someting) => {
    console.log(Someting);
}

let HigherOrderFun = (Name, Class, CallBackFun) => {
    const Details = `My name is ${Name} & I read in class ${Class}`;
    CallBackFun(Details);
}
HigherOrderFun("Sabbir", "B.Sc", Display);*/

// Try Catch Throw Finally in ES6

// Very important Error Handling

/*try{
    console.log("Sabbir Sun");
    //console.log(num);
    let age = 32;
    if(age < 30) {
        throw "Hello Baby";
    }
    else if(age > 31){
        throw "How are you Sabbir";
    }
   
}catch(SunError){
    //console.log(SunError.name);
    //console.log(SunError.message);
    console.log(SunError);
}finally{
    console.log("Programmer");
}*/

// ES6 Promise => kind of login purpase

/*let message = true; // false
let promise = new Promise((resolve, reject) => {
    if(message){
        resolve([
            {username: "Sabbir", email: "sabbirsun1234@gmail.com"},
            {username: "Sun", email: "sabbirsun1920@gmail.com"}
        ])
    }else{
        reject("User is not Valid");
    }
})
promise.then((s) => {
    console.log(s);
})
promise.catch(() => {
    console.log(error);
})*/

// ES6 Async Await

/*function getUser(userId){
    return new Promise((resolve, reject) => {
        console.log(`Get user from the database.`);
        setTimeout(() => {
            resolve({
                userId: "userId",
                username: "Sabbir"
            });
        }, 1000);
    });
}

function getServices(user) {
    return new Promise((resolve,reject) => {
        console.log(`Get services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(["Email", "VPN", "CDN"]);
        }, 2 * 1000);
    });
}

function getServicesCost(services) {
    return new Promise((resolve,reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 3 * 1000);
    });
}

async function loadData(){
    let user = await getUser(100);
    let service = await getServices(user);
    let cost = await getServicesCost(service);
    console.log(`The service cost is ${cost}`);
}
loadData();

// getUser(100)
//     .then(getServices)
//     .then(getServicesCost)
//     .then(console.log);*/

// Radio Button

/*const group = document.querySelector(".group");
const output = document.querySelector(".output");
const sizes = ["XS","S","M","L","XL","XXL"];

group.innerHTML = sizes.map((size)=>`<div>
    <input type="radio" name="size" value="${size}" id="${size}">
    <label for="${size}">${size}</label>
    </div>`
).join(" ");

const radioButton = document.querySelectorAll("input");
for(const radioBtn of radioButton){
    radioBtn.addEventListener("change", showOutput)
}

function showOutput(e){
    console.log(e);
    if(this.checked){
        document.querySelector(".output").innerHTML =`You selected ${this.value}`;
    }
}*/

// Checkbox

/*const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    let checkboxes = document.querySelectorAll("input[name='color']:checked");
    let values = [];

    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });

    console.log(values);
});*/

// Selected Box

/*const Frameworks = document.querySelector("#Frameworks");
const btn = document.querySelector("#btn");

btn.onclick = (e) => {
    e.preventDefault();
    const selectedFrameworks = [].filter
        .call(Frameworks.options, (option) => option.selected)
        .map((option) => option.text);
    //console.log(selectedFrameworks);
    alert(selectedFrameworks);
};*/

// Add or Remove

/*const btnAdd = document.querySelector('#btnAdd');
const btnRemove = document.querySelector('#btnRemove');
const listbox = document.querySelector('#list');
const framework = document.querySelector('#framework');

btnAdd.onclick = (e) => {
  e.preventDefault();

  // validate the option
  if (framework.value == '') {
    alert('Please enter the name.');
    return;
  }
  // create a new option
  const option = new Option(framework.value, framework.value);
  // add it to the list
  listbox.add(option, undefined);

  // reset the value of the input
  framework.value = '';
  framework.focus();
};

// remove selected option
btnRemove.onclick = (e) => {
  e.preventDefault();

  // save the selected options
  let selected = [];

  for (let i = 0; i < listbox.options.length; i++) {
    selected[i] = listbox.options[i].selected;
  }

  // remove all selected option
  let index = listbox.options.length;
  while (index--) {
    if (selected[index]) {
      listbox.remove(index);
    }
  }
};*/

// JS DOM Handling Change Event

/*const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("change", ()=>{
    result.textContent = message.value;
})*/

// Input Event

/*const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("input", ()=>{
    result.textContent = message.value;
})*/



