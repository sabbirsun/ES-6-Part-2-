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

let message = true; // false
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
})


