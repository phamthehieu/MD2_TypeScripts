"use strict";
exports.__esModule = true;
exports.UserManager = void 0;
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.product = [];
    }
    Object.defineProperty(UserManager.prototype, "getInfo", {
        get: function () {
            return this.product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserManager.prototype, "GetAll", {
        set: function (product) {
            this.product.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return UserManager;
}());
exports.UserManager = UserManager;
