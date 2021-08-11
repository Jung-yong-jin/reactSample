//arrowFunction
const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = (x) => (a) => multiply(x, a);
const addX = (x) => (a) => add(x, a);

//커링 함수 multiplyX(), addX()는 다음과 같이 응용될 수 있습니다.
const addFour = addX(4);
const multiplyTow = multiplyX(2);
const multiplyThree = multiplyX(3);

function compose() {
  //Array의 prototype 객체 안에 정의된 slice() 함수를 사용하여 나열형 자료를 배열로 변환 합니다.
  //자바스크립트의 트릭으로 실무에서는 arguments를 배열로 변환할 때 자주 사용되는 패턴입니다.
  const funcArr = Array.prototype.slice.call(arguments);

  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (value) {
        return nextFunc(prevFunc(value));
      };
    },
    (k) => k,
  );
}

//console.log(compose([multiplyTow, multiplyThree, addFour])(10));

const formula = compose(multiplyTow, multiplyThree, addFour); //
console.log(formula(10));

//arguments를 활용하여 하나의 실행 인자 value를 다중 인자로 사용 가능하게 확장하기
function compose2() {
  const funcArr = Array.prototype.slice.call(arguments);

  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function () {
        const args = Array.prototype.slice.call(arguments);
        return nextFunc(prevFunc.apply(null, args));
      };
    },
    function (k) {
      return k;
    },
  );
}

//전개 연산자로 더 간결하게 만들기
function compose3(...funcArr) {
  return funcArr.reduce(
    function (prevFunc, nextFunc) {
      return function (...args) {
        return nextFunc(prevFunc(...args));
      };
    },
    function (k) {
      return k;
    },
  );
}

const formula3 = compose3(multiplyTow, multiplyThree, addFour); //
console.log(formula3(10, 20));
