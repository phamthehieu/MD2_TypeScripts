class Employee {
    private _lastname: string;
    private _name: string;
    private _birthday: number;
    private _address: string;
    private _jobPosition: string;
    private static _employee = [];


    constructor(lastname: string, name: string, birthday: number, address: string, jobPosition: string) {
        this._lastname = lastname;
        this._name = name;
        this._birthday = birthday;
        this._address = address;
        this._jobPosition = jobPosition;
    }

    getLastname(): string {

        return this._lastname;
    }

    setLastname(value: string) {

        this._lastname = value;
    }

    getName(): string {

        return this._name;
    }

    setName(value: string) {

        this._name = value;
    }

    getBirthday(): number {

        return this._birthday;
    }

    setBirthday(value: number) {

        this._birthday = value;
    }

    getAddress(): string {

        return this._address;
    }

    setAddress(value: string) {

        this._address = value;
    }

    getJobPosition(): string {

        return this._jobPosition;
    }

    setJobPosition(value: string) {

        this._jobPosition = value;
    }

    static display() {

        return Employee._employee
    }

    static add(employee: object) {

        return Employee._employee.push(employee)
    }

    static setInfo(employee: object) {

        return employee
    }

    static delete(employee: object) {

        if (Employee._employee.indexOf(employee) !== 1) {

            Employee._employee.splice(Employee._employee.indexOf(employee), 1)
        }
    }

    static edit(employee1: object, employee2: object) {

        Employee._employee[Employee._employee.indexOf(employee1)] = employee2;

        return Employee._employee;
    }
}

let employee1 = new Employee('1', '1', 1, '1', '1')

let employee2 = new Employee('12', '12', 12, '12', '12')

let employee3 = new Employee('1', '3', 1, '1', '1')

Employee.add(employee1)

Employee.add(employee2)

Employee.add(employee3)

Employee.setInfo(Employee);

Employee.edit(employee2, employee3);

Employee.delete(employee1);

console.log(Employee.display());

