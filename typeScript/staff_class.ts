class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getAge(): number {
        return this.age;
    }

    setName(name: string) {
        this.name = name;
    }

    setEmail(email: string) {

        this.email = email;
    }

    setAge(age: number) {

        this.age = age;
    }
}

let staff = new Staff('Staff 1', 'staff@gmail.com', 20);

let nameStaff = staff.getName();

console.log(nameStaff);

staff.setName('Staff 2');

let currentNameStaff = staff.getName();

console.log(currentNameStaff);

let emailStaff = staff.getEmail();

console.log(emailStaff);

staff.setEmail('staff2@gmail.com');

let currentEmailStaff = staff.getEmail();

console.log(currentEmailStaff);

let ageStaff = staff.getAge();

console.log(ageStaff);

staff.setAge(22);

let currentAgeStaff = staff.getAge();

console.log(currentAgeStaff);