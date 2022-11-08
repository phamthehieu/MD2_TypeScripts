enum Gender {

    MALE = "MALE",

    FEMALE = "FEMALE",

    OTHER = "OTHER"

}

class Employee {

    private _fullName: string = '';

    private _gender: Gender = Gender.OTHER;

    private _birthday: Date;

    private _email: string = '';

    private _phoneNumber: string = ''


    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {

        this._fullName = fullName;

        this._gender = gender;

        this._birthday = birthday;

        this._email = email;

        this._phoneNumber = phoneNumber;

    }

}

let employeeList: Employee[] = [];

employeeList.push(new Employee("Tran Thi A", Gender.FEMALE, new Date("1991-11-2"), "btran1@gmail.com", "012345790"));

employeeList.push(new Employee("Tran Thi B", Gender.MALE, new Date("1999-1-22"), "btan3@gmail.com", "012346790"));

employeeList.push(new Employee("Tran Thi C", Gender.FEMALE, new Date("1993-10-12"), "btrn5@gmail.com", "01245679"));

employeeList.push(new Employee("Tran Thi d", Gender.MALE, new Date("1983-11-22"), "trn5@gmail.com", "901245679"));


function showEmployee(employee: Employee) {

    console.log(employee);

}

function deleteEmployee(index: number) {

    return employeeList.splice(index);
}

deleteEmployee(1)

employeeList.forEach(showEmployee);
