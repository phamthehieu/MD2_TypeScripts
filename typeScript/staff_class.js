var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff = new Staff('Staff 1', 'staff@gmail.com', 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
var emailStaff = staff.getEmail();
console.log(emailStaff);
staff.setEmail('staff2@gmail.com');
var currentEmailStaff = staff.getEmail();
console.log(currentEmailStaff);
var ageStaff = staff.getAge();
console.log(ageStaff);
staff.setAge(22);
var currentAgeStaff = staff.getAge();
console.log(currentAgeStaff);
