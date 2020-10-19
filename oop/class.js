class Mobile{
    constructor(brand, price, location){
        this.brand = brand;
        this.price = price;
        this.location = location;
    }
}

const mobile1 = new Mobile("Iphone", 25, "USA");
console.log(mobile1);

const mobile2 = new Mobile("MI", 10, "China");
console.log(mobile2);

const mobile3 = new Mobile("Oppo", 10, "India");
console.log(mobile3);