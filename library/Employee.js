class Employee {
    constructor(name,id,email){
        this.name = name
        this.id = id
        this.email = email
    };
    gitName() {
        return this.name
    }
    gitId() {
        return this.id
    }
    gitEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
};

module.exports = Employee
