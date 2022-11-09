var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, birthday, address, jobPosition) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._address = address;
        this._jobPosition = jobPosition;
    }
    Employee.prototype.getId = function () {
        return this._id;
    };
    Employee.prototype.setId = function (value) {
        this._id = value;
    };
    Employee.prototype.getFirstName = function () {
        return this._firstName;
    };
    Employee.prototype.setFirstName = function (value) {
        this._firstName = value;
    };
    Employee.prototype.getLastName = function () {
        return this._lastName;
    };
    Employee.prototype.setLastName = function (value) {
        this._lastName = value;
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
    return Employee;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.add = function (employee) {
        EmployeeManager.listEmployee.push(employee);
    };
    EmployeeManager.display = function () {
        for (var _i = 0, _a = EmployeeManager.listEmployee; _i < _a.length; _i++) {
            var employee = _a[_i];
            console.log(employee);
        }
    };
    EmployeeManager.deleteEmployee = function (id) {
        for (var i = 0; i < EmployeeManager.listEmployee.length; i++) {
            if (EmployeeManager.listEmployee[i]._id === id) {
                EmployeeManager.listEmployee.splice(id, 1);
            }
        }
    };
    EmployeeManager.editEmployee = function (id, employeeEdit) {
        for (var i = 0; i < EmployeeManager.listEmployee.length; i++) {
            if (EmployeeManager.listEmployee[i]._id === id) {
                EmployeeManager.listEmployee[i] = employeeEdit;
            }
        }
    };
    EmployeeManager.listEmployee = [];
    return EmployeeManager;
}());
var hieu = new Employee(1, 'hieu', 'pham', '2000', 'NV', 'tt');
var hieu1 = new Employee(2, 'hieu1', 'pham1', '2001', 'NV1', 'tt1');
var hieu2 = new Employee(3, 'hieu2', 'pham2', '2002', 'NV2', 'tt2');
EmployeeManager.add(hieu);
EmployeeManager.add(hieu1);
EmployeeManager.add(hieu2);
EmployeeManager.display();
var hieu3 = new Employee(4, 'hieu3', 'pham3', '2003', 'NV3', 'tt3');
EmployeeManager.display();
EmployeeManager.deleteEmployee(2);
