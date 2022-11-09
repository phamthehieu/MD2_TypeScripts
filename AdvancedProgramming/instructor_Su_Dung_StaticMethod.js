var Instructor = /** @class */ (function () {
    function Instructor(_a) {
        var name = _a.name, _b = _a.role, role = _b === void 0 ? 'assistant' : _b;
        this.role = role;
        this.name = name;
    }
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, " - ").concat(this.role));
    };
    Instructor.helloWorld = function () {
        console.log('Hi there');
    };
    Instructor.canTeach = function (instructor) {
        return (instructor.role === 'classroom');
    };
    return Instructor;
}());
var juniorInstructor = new Instructor({ 'name': 'Brian' });
var seniorInstructor = new Instructor({ 'name': 'alice', 'role': 'classroom' });
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor.canTeach(juniorInstructor)));
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor.canTeach(seniorInstructor)));
