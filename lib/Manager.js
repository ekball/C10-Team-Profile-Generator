const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name = '') {

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName () {
        return this.name;
    }
    
    getId () {
        return this.id;
    }
    
    getEmail () {
        return this.email;
    }

    getRole () {
        return Manager;
    }

};

module.exports = Manager;