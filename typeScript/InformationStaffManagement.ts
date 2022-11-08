enum Gender {
    MALE = "MALE",
    FAMALE = "FAMALE",
    OTHER = "OTHER",
}
class Employee {
    private _fullName: string = "";
    private _gender: Gender = Gender.OTHER;
    private _birthday?: Date;
    private _email: string = "";
    private _phoneNumber: string = "";

    constructor(fullName: string, gender: Gender, birthday: Date, email: string, phoneNumber: string) {
        this._fullName = fullName;
        this._gender = gender;
        this._birthday = birthday;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }

    getFullName(): string {
        return this._fullName;
    }

    setFullName(value: string) {
        this._fullName = value;
    }

    getGender(): Gender {
        return this._gender;
    }

    setGender(value: Gender) {
        this._gender = value;
    }

    getBirthday(): Date {
        return this._birthday;
    }

    setBirthday(value: Date) {
        this._birthday = value;
    }

    getEmail(): string {
        return this._email;
    }

    setEmail(value: string) {
        this._email = value;
    }

    getPhoneNumber(): string {
        return this._phoneNumber;
    }

    setPhoneNumber(value: string) {
        this._phoneNumber = value;
    }
}
let employeeList: Employee[] = [];

employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));

employeeList.push(new Employee("Nguyen Van b", Gender.FAMALE, new Date("1999-11-21"), "anguyen@gmail.com", "0123216289"));

function showEmployee(employee: Employee) {

    console.log(employee);

}

employeeList.forEach(showEmployee);