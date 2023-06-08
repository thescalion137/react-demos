"use strict";
exports.__esModule = true;
// let num: number | boolean;
// num = 20;
// console.log("🚀 ~ file: main.ts:5 ~ num", num);
// num = true;
// console.log("🚀 ~ file: main.ts:8 ~ true", true);
// const add = (a: number = 20, b?: number)   => {
// if (b) {
//     console.log("DFsdfSD",b);
// } else {
//     console.log("outside");
// }
// };
// console.log("🚀 ~ file: main.ts:15 ~ ", add(2))
//---- interface --------
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// const fullName = (person: Person) => {
//   console.log(`hello ${person.firstName} ${person.lastName}`);
// };
// let p = { firstName: "vish", lastName: "makwana" };
// fullName(p);
// ----- class -----
var employee = /** @class */ (function () {
    function employee(name) {
        this.empName = name;
    }
    employee.prototype.greet = function () {
        console.log("hello " + this.empName);
    };
    return employee;
}());
var emp = new employee("vishal");
console.log("🚀 ~ file: main.ts:51 ~ emp ::", emp);
emp.greet();
