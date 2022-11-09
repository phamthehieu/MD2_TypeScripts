// export
class ProductManager {

    private product = [];

    constructor() {
    }
    get getAll() {
        return this.product
    }
    set add(product) {
        this.product.push(product);
    }
}

class Product {
    private _name: string;

    private _price: number;

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    getName(): string {
        return this._name;
    }

    getPrice(): number {
        return this._price;
    }

    setName(value: string) {
        this._name = value;
    }

    setPrice(value: number) {
        this._price = value;
    }
}

let laptop = new Product('laptop', 2000);

let iphone = new Product('Iphone',10000);

let productManager = new ProductManager();
productManager.add = laptop;
productManager.add = iphone;

console.log(productManager.getAll)