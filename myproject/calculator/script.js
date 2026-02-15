const first = document.getElementById("first");
const second = document.getElementById("second");
const addition = document.getElementById("addition");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divide = document.getElementById("divide");
const result = document.getElementById("result");
addition.addEventListener("click", function() {
    const a = Number(first.value);
    const b = Number(second.value);
    result.textContent = `The result is ${a + b}`;
    console.log("User used the Addition button");
});
minus.addEventListener("click", function() {
    const a = Number(first.value);
    const b = Number(second.value);
    result.textContent = `The result is ${a - b}`;
    console.log("User used the Subtraction button");
});
times.addEventListener("click", function() {
    const a = Number(first.value);
    const b = Number(second.value);
    result.textContent = `The result is ${a * b}`;

});
divide.addEventListener("click", function() {
    const a = Number(first.value);
    const b = Number(second.value);
    result.textContent = `The result is ${a / b}`;
});