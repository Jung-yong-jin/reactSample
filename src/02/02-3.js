// ES5 문법
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
var combined1 = [array1[0], array1[1], array2[0], array2[1]]; //배열의 각 요소를 추출하여 새로운 배열을 만들었습니다.
var combined2 = array1.concat(array2);
var combined3 = [].concat(array1, array2); //concat() 함수로 두 배열을 합쳤습니다.
var first = array1[0];
var second = array1[1]; //인덱스로 배열 요소를 추출했습니다.
var three = array1[2] || 'empty'; //||연산자와 조합하면 추출할 배열 요소가 없을 때 기본값을 지정할 수 있습니다.

function func(a, b, c) {
  //특수 변수(arguments)를 사용해 함수 내 인자 항목들을 배열로 변환하였습니다.

  //var args = Array.prototype.slice.call(this, arguments);
  var args = Array.prototype.slice.call(arguments);
  var first = args[0];
  var others = args.slice(1, args.length);

  console.log(args);
  console.log(first);
  console.log(others);
}
//console.log(combined1);
//console.log(combined2);
//console.log(combined3);
//console.log(first);
//console.log(second);
//console.log(three);
func(...combined1);

//전개 연산자
// ES6 문법
combined1 = [...array1, ...array2]; //두 배열 항목을 전개 연산자로 합쳤습니다.

//combined1 의 각 위치에 있는 요소를 추출 했습니다.
//three 요소가 없을때 기본값 대처
//others 나머지 요소
var [first, second, three = 'empty', ...others] = combined1;
//function func(args) {
//  var [first, ...others] = args;
//}

//console.log(first);
//console.log(second);
///console.log(three);
//console.log(others);
