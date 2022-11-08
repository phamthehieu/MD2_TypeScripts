var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FAMALE"] = "FAMALE";
    Gender["OTHER"] = "OTHER";
    Gender[Gender["N"] = void 0] = "N";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthday, email, phoneNumber) {
        this._fullName = "";
        this._gender = Gender.OTHER;
        this._email = "";
        this._phoneNumber = "";
        this._fullName = fullName;
        this._gender = gender;
        this._birthday = birthday;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }
    Employee.prototype.getFullName = function () {
        return this._fullName;
    };
    Employee.prototype.setFullName = function (value) {
        this._fullName = value;
    };
    Employee.prototype.getGender = function () {
        return this._gender;
    };
    Employee.prototype.setGender = function (value) {
        this._gender = value;
    };
    Employee.prototype.getBirthday = function () {
        return this._birthday;
    };
    Employee.prototype.setBirthday = function (value) {
        this._birthday = value;
    };
    Employee.prototype.getEmail = function () {
        return this._email;
    };
    Employee.prototype.setEmail = function (value) {
        this._email = value;
    };
    Employee.prototype.getPhoneNumber = function () {
        return this._phoneNumber;
    };
    Employee.prototype.setPhoneNumber = function (value) {
        this._phoneNumber = value;
    };
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
employeeList.push(new Employee("Nguyen Van b", Gender.FAMALE, new Date("1999-11-21"), "anguyen@gmail.com", "0123216289"));
function showEmployee(employee) {
    console.log(employee);
}
employeeList.forEach(showEmployee);
