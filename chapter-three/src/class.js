class Class {
    leader;
    teacher = null;
    constructor(number) {
        this.number = number;
    }


    assignLeader(student) {
        if (student.klass.number === this.number){
            this.leader = student;
            if (this.teacher !== null) {
                console.log("I am " + this.teacher.name + ". I know " + student.name + " become Leader of Class " + this.number + ".");
            }
        }else {
            this.leader = null;
            console.log("It is not one of us.");
        }
    }

    getDisplayName() {
        return "Class " + this.number;
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    appendMember(student) {
        student.klass.number = this.number;
        if (this.teacher !== null){
            console.log("I am " + this.teacher.name + ". I know " + student.name + " has joined Class " + this.number + ".");
        }
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

module.exports = Class;

