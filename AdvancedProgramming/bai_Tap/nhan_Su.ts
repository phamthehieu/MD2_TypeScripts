class Employee {
    _id: number;
    private _firstName: string;
    private _lastName: string;
    private _birthday: string;
    private _address: string;
    private _jobPosition: string;


    constructor(id: number, firstName: string, lastName: string, birthday: string, address: string, jobPosition: string) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._jobPosition = jobPosition;
    }

    getId(): number {
        return this._id;
    }

    setId(value: number) {
        this._id = value;
    }

    getFirstName(): string {
        return this._firstName;
    }

    setFirstName(value: string) {
        this._firstName = value;
    }

    getLastName(): string {
        return this._lastName;
    }

    setLastName(value: string) {
        this._lastName = value;
    }

    getBirthday(): string {
        return this._birthday;
    }

    setBirthday(value: string) {
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
}

class EmployeeManager {

    static listEmployee: Employee[] = [];

    static add(employee: Employee) {

        EmployeeManager.listEmployee.push(employee);
    }
    static display() {

        for (const employee of EmployeeManager.listEmployee) {

            console.log(employee)
        }
    }
    static deleteEmployee(id: number): void {

        for (let i = 0; i < EmployeeManager.listEmployee.length; i++) {

            if (EmployeeManager.listEmployee[i]._id === id) {

                EmployeeManager.listEmployee.splice(id,1)
            }
        }
    }
    static editEmployee(id: number, employeeEdit: Employee) {

        for (let i = 0; i < EmployeeManager.listEmployee.length ; i++) {

            if (EmployeeManager.listEmployee[i]. _id === id) {

                EmployeeManager.listEmployee[i] = employeeEdit
            }
        }
    }
}

let hieu = new Employee(1,'hieu','pham','2000','NV','tt')

let hieu1 = new Employee(2,'hieu1','pham1','2001','NV1','tt1')

let hieu2 = new Employee(3,'hieu2','pham2','2002','NV2','tt2')

EmployeeManager.add(hieu);

EmployeeManager.add(hieu1);

EmployeeManager.add(hieu2)

EmployeeManager.display()

let hieu3 = new Employee(4,'hieu3','pham3','2003','NV3','tt3')

EmployeeManager.editEmployee(4, hieu3)

EmployeeManager.display()

EmployeeManager.deleteEmployee(2)
