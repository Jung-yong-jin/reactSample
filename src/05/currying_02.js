//arrowFunction
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(a, 2);
const addX = (x) => (a) => add(x, a);

//커링 함수 multiplyX(), addX()는 다음과 같이 응용될 수 있습니다.
const addFour = addX(4);
const multiplyTow = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = (x) => addFour(multiplyThree(multiplyTow(x)));
const result = formula(10);
console.log(result);

//compose() 함수 만들어 보기
//reduce()  함수 사용하여 조합하기
const result2 = [multiplyTow, multiplyThree, addFour].reduce(
  function (prevFunc, nextFunc) {
    return function (value) {
        console.log(value);
      return nextFunc(prevFunc(value));
    };
  },
  function (100) {
    return k;
  }, 
);

console.log(result2(10));
