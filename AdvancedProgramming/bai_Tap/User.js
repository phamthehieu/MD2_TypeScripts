var User = /** @class */ (function () {
    function User(name, email, role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }
    User.prototype.getName = function () {
        return this._name;
    };
    User.prototype.setName = function (value) {
        this._name = value;
    };
    User.prototype.getEmail = function () {
        return this._email;
    };
    User.prototype.setEmail = function (value) {
        this._email = value;
    };
    User.prototype.getRole = function () {
        return this._role;
    };
    User.prototype.setRole = function (value) {
        this._role = value;
    };
    return User;
}());
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.product = [];
    }
    UserManager.prototype.getInfo = function () {
        return this.product;
    };
    UserManager.prototype.getAll = function (product) {
        this.product.push(product);
    };
    UserManager.prototype.All = function (product) {
        if (product.getRole() === 1) {
            console.log('ADMIN');
        }
        else
            console.log('USER');
    };
    return UserManager;
}());
var user0 = new User('Nguyen Van A', 'nguyenvana@gmail.com', 1);
var user1 = new User('Nguyen Van b', 'nguyenvanb@gmail.com', 2);
var user2 = new User('Nguyen Van c', 'nguyenvanc@gmail.com', 2);
var userManager = new UserManager();
userManager.getAll(user0);
userManager.getAll(user1);
userManager.getAll(user2);
console.log(userManager.getInfo());
console.log(userManager.All(user0));
console.log(userManager.All(user1));
console.log(userManager.All(user2));
