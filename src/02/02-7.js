//기존 자바스크립트 함수 선언 2가지 방법
function add(first, second) {
  return first + second;
}
console.log(add);
var add = function (first, second) {
  return first + second;
};

//ES6의 화살표 함수 사용 방법
//앞에서 본 기존의 함수 표현식을 화살표 함수로 변경
var add = (first, second) => {
  return first + second;
};
console.log(add);

//본문 블록이 비어 있고 결과값을 바로 반환하는 경유에는 중괄호를 생략하고 => 뒤에 반환 표현식을 넣을 수 있습니다.
var add = (first, second) => first + second;

//반환값이 객체라면 괄호를 결과값을 감싸 간결하게 표현할 수 있다.
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });

console.log(addAndMultiple(1, 2).multiply);

//함수 표현식을 반환합니다.
//화살표 함수를 사용하여 간결한 코드로 함수를 반환할 수 있습니다.
function addNumber(num) {
  return function (value) {
    return num + value;
  };
}
console.log(addNumber(1)(20));

var addNumber = (num) => (value) => num + value;
console.log(addNumber(33)(44));

var addTwo = addNumber(4);
var result = addTwo(7);
console.log(result);

class MyClass {
  value = 10;
  constructor() {
    var addThis2 = function (first, second) {
      return this.value + first + second;
    }.bind(this);
    var addThis3 = (first, second) => this.value + first + second;
  }
}

var s = new MyClass(1, 3);
console.log(s);
