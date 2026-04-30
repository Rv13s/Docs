

// class

class User{  // starts with uppercase

    
    #name; // name change to private property
    #age;
   

    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }





    //method no need enter function
    display(){
        console.log('Name :', this.#name);
        console.log('age :' , this.#age);
        return true;
    }

    get name (){   // for access private variable
        return "get Name: " + this.#name;
    }

    get age(){
        return 'age is '+this.#age;
    }

    set name(name){ // to set a value

        if(name == "code io"){
            this.#name = "code";
        }else{

            this.#name = name;

        }
        
    }

    set age(age){
        if(age==23){
            this.#age=45;
        }

        
        else{
            this.#age = age;
        }
       
    }
        
    

}


let classObject = new User('Gopal', 23);


classObject.name = "code io"

classObject.age = 23

console.log(classObject.name)

console.log(classObject.age)



