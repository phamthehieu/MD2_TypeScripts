export class UserManager {
    private product = [];

    constructor() {
    }
    get getInfo() {
        return this.product;
    }
    set getAll(product) {
        this.product.push(product);
    }
}