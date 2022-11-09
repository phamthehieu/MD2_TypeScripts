"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(name, price) {
        this._name = name;
        this._price = price;
    }
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    Product.prototype.setName = function (value) {
        this._name = value;
    };
    Product.prototype.setPrice = function (value) {
        this._price = value;
    };
    return Product;
}());
exports.Product = Product;
