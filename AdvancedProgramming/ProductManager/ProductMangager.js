// export
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.product = [];
    }
    Object.defineProperty(ProductManager.prototype, "getAll", {
        get: function () {
            return this.product;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductManager.prototype, "add", {
        set: function (product) {
            this.product.push(product);
        },
        enumerable: false,
        configurable: true
    });
    return ProductManager;
}());
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
var laptop = new Product('laptop', 2000);
var iphone = new Product('Iphone', 10000);
var productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;
console.log(productManager.getAll);
