class Person {
    name;
    constructor(name){
        this.name = name;
    }
    toString() {
        return (`Name of the preson : ${this.name}`);
    }
}

class Student extends Person {
    constructor(name,id){
        //super keyword calling from the above constructor
        super(name);
        this.id = id;
    }
    toString(){
       
        return (`${super.toString()},Student ID :${this.id}`);
        
    }

}

let student1 = new Student('krishna','24');
console.log(student1.toString());