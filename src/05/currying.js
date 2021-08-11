//두 인자를 곱하여 반환하는 함수
function multiply(a, b) {
  return a * b;
}

//multiply를 재활용 하여 만든 함수 인자 a를 받아 2를 곱하는 함수
function multiplyTwo(a) {
  return multiply(a, 2);
}

//커링은 함수를 반환하는 함수
//커링 함수 multiplyX를 구현한 예
function multiplyX(x) {
  return function (a) {
    return multiply(a, x);
  };
}

//arrow Function Currying Sample
const arrowMultiplyX = (x) => (a) => multiply(a, x);

const sum = multiply(3, 3);
const sumTwo = multiplyTwo(3);
console.log(sum);
console.log(sumTwo);
console.log(multiplyX(3)(5));
console.log(arrowMultiplyX(3)(5));

//multipolyX() 함수를 사용하여 n배 함수를 손쉽게 생성한 예입니다.
const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3);
const result2 = multiplyFour(3);

console.log(result1);
console.log(result2);

// => ((x * a) * b) + c
// a = 2, b = 3, c = 4
const equation = (a, b, c) => (x) => x * a * b + c;
const formula = equation(2, 3, 4);
const x = 10;
const result = formula(x);

console.log(result);

const multiplyNew = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyNewX = (x) => (a) => multiplyNew(a, 2);
const addX = (x) => (a) => add(x, a);

const addFour = addX(4);
const multiplyNewTwo = multiplyNewX(2);
const multiplyNewThree = multiplyNewX(3);
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));
