//ob

/* let user = {car : 'Tata', 
    carmodel:'currv', 
    carprice:120000,
    display: function(){}
}; 

console.log(user)
*/


// class

class User{  // starts with uppercase

    // name = 'Pollachi';   command this for constructor
    // age = 25;

    #name // name change to private property

   

    constructor(name, age){
        this.#name = name;
        this.age = age;
    }





    //method no need enter function
    display(){
        console.log('Name :', this.#name);
        console.log('age :' , this.age);
        return true;
    }

    get name (){   // for access private variable
        return "get Name: " + this.#name;
    }

    set name(name){ // to set a value

        if(name == "code io"){
            this.#name = "code";
        }else{

            this.#name = name;

        }
        
    }

}


let classObject = new User('Gopal', 23);
//classObject.display();

classObject.name = "code io"

console.log(classObject.name)

//let classObject = new User(); for class not for constructir
//console.log(typeof (classObject));

// console.log(classObject.name);


// console.log(classObject.age);

//console.log(classObject.display()); // undefined


