var Employee = /** @class */ (function () {
    function Employee(lastname, name, birthday, address, jobPosition) {
        this._lastname = lastname;
        this._name = name;
        this._birthday = birthday;
        this._address = address;
        this._jobPosition = jobPosition;
    }
    Employee.prototype.getLastname = function () {
        return this._lastname;
    };
    Employee.prototype.setLastname = function (value) {
        this._lastname = value;
    };
    Employee.prototype.getName = function () {
        return this._name;
    };
    Employee.prototype.setName = function (value) {
        this._name = value;
    };
    Employee.prototype.getBirthday = function () {
        return this._birthday;
    };
    Employee.prototype.setBirthday = function (value) {
        this._birthday = value;
    };
    Employee.prototype.getAddress = function () {
        return this._address;
    };
    Employee.prototype.setAddress = function (value) {
        this._address = value;
    };
    Employee.prototype.getJobPosition = function () {
        return this._jobPosition;
    };
    Employee.prototype.setJobPosition = function (value) {
        this._jobPosition = value;
    };
    Employee.display = function () {
        return Employee._employee;
    };
    Employee.add = function (employee) {
        return Employee._employee.push(employee);
    };
    Employee.setInfo = function (employee) {
        return employee;
    };
    Employee["delete"] = function (employee) {
        if (Employee._employee.indexOf(employee) !== 1) {
            Employee._employee.splice(Employee._employee.indexOf(employee), 1);
        }
    };
    Employee.edit = function (employee1, employee2) {
        Employee._employee[Employee._employee.indexOf(employee1)] = employee2;
        return Employee._employee;
    };
    Employee._employee = [];
    return Employee;
}());
var employee1 = new Employee('1', '1', 1, '1', '1');
var employee2 = new Employee('12', '12', 12, '12', '12');
var employee3 = new Employee('1', '3', 1, '1', '1');
Employee.add(employee1);
Employee.add(employee2);
Employee.add(employee3);
Employee.setInfo(Employee);
Employee.edit(employee2, employee3);
Employee["delete"](employee1);
console.log(Employee.display());
