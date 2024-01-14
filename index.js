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

// let Sun = [1,2,3,4,5];
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
console.log(Sun1);

