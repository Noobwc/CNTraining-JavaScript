import Person from './person';

class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if(this.klasses === null || this.klasses === undefined || this.klasses.length === 0){
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach No Class.";
        }else {
            let allClass = '';
            for (const klass of this.klasses) {
                allClass += " " + klass.number + ",";
            }
            return "My name is " + this.name + ". I am " + this.age + " years old. I am a Teacher. I teach Class" + allClass.substr(0, allClass.length - 1) + ".";
        }
    }

}

export default Teacher;


