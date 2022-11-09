class Instructor {
    readonly name: string;
    private readonly role: string;

    constructor({name, role = 'assistant'}) {
        this.role = role;
        this.name = name;
    }

    renderDetails() {
        console.log(`${this.name} - ${this.role}`);
    }
    static helloWorld() {
        console.log('Hi there');
    }
    static canTeach(instructor) {
        return (instructor.role === 'classroom');
    }
}

let juniorInstructor = new Instructor({'name' : 'Brian'});

let seniorInstructor = new Instructor({'name' : 'alice', 'role': 'classroom'});

juniorInstructor.renderDetails();

seniorInstructor.renderDetails();

Instructor.helloWorld();

console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
);

console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
);