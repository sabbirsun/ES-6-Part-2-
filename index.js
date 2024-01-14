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

class Book{
    static fun() {// class name diye static er vitore function call kora
        console.log("Sabbir Sun");
    }
}
Book.fun()