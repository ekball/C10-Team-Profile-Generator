const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name = '') {

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

    }

    getName () {}
    
    getId () {}
    
    getEmail () {}

    getSchool () {}

    getRole () {
        return Intern;
    }

};

module.exports = Intern;