//나머지 매개변수와 전개 문법
//상당수의 자바스크립트 내장 함수는 인수의 개수에 제약을 두지 않습니다.

//나머지 매개변수...
//함수 정의 방법과 상관없이 함수에 넘겨주는 인수의 개수엔 제약이 없습니다.
//아래와 같이 말이죠
function sum(a, b) {
  return a + b;
}

//함수를 정의할 땐 인수를 두 개만 받도록 하고, 실제 함수를 호출할 땐 이보다 더 많은 `여분의` 인수를 전달했지만, 에러가 발생하지 않았습니다.
//다만 반환 값은 처음 두개의 인수만을 사용해 계산됩니다.
console.log(sum(1, 2, 3, 4, 5));

//이렇게 여분의 매개변수는 그 값들을 담을 배열 이름을 마침표 세 개...뒤에 붙여주면 함수 선언부에 포함시킬 수 있습니다.
//이때 마침표 세 개 ...는 "나머지 매개변수들을 한데 모아 배열에 집어넣어라."는 것을 의미합니다.
//아래 예시에선 모든 인수가 배열 args에 모입니다.

function sumAll(...args) {
  //args는 배열의 이름입니다.
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));

//앞부분의 매개변수는 변수로, 그 이외의 매개변수들은 배열로 모을 수도 있습니다.
//아래 예시에선 처음 두 인수는 변수에, 나머지 인수들은 titles 이라는 배열에 할당됩니다.
function showName(firstName, lastName, ...titles) {
  console.log(`${firstName} ${lastName}`);

  //나머지 인수들은 배열 titles의 요소가 됩니다.
  //titles= ["consul", "Imperator"]
  console.log(titles[0]); //
  console.log(titles[1]);
  console.log(titles.length);
}

showName('Julius', 'Caesar', 'consul', 'Imperator');

//'arguments' 변수
//arguments 라는 특별한 유사 배열 객체(array-like-object)를 이용함ㄴ 인덱스를 사용해 모든 인수에 접근할 수 있습니다.
function showName2() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  //arguments는 이터러블 객체이기 때문에  (iterator 객체)
  //for(let arg of arguments) alert(arg); 를 사용해 인수를 나열할 수 있습니다.
}
showName2('Julius', 'Caesar', 'consul', 'Imperator');

//전개문법은 ...를 사용하기 때문에 나머지 매개변수와 비슷해 보이지만,
//전개 문법은 나머지 매개변수와 !!반대의 역할!! 을 합니다.
function max(...a) {
  console.log(a);
}

function max2(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

//이터러블(iterator) 객체 여러 개를 전달하는 것도 가능
max(...arr, ...arr2);
//전개 문법을 평범한 값과 혼합해 사용하는 것도 가능
max(...arr, 90, 100, ...arr2);
//배열을 합칠 때 전개 문법을 활용할 수도 있습니다.
let merged = [0, ...arr, 2, ...arr2];

//앞선 예시들에선 배열을 대상으로 전개 문법이 어떻게 도작하는지 살펴보았습니다.
//그런데 배열이 아니더라도 이터러블 객체이면 전개 문법을 사용할 수 있습니다.
//전개 문법을 사용해 문자열을 문자 배열로 변환 시켜 보겠습니다.
let str = 'hello';
console.log([...str]);

//전개 문법은 for...of와 같은 방식으로 내부에서 iterator(반복자)를 사용해 요소를 수집합니다.
//문자열 for..of를 사용하면 문자열을 구성하는 문자가 반환됩니다. ...str도 "H","e","l","l","o" 가 되는데, 이 문자 목록은 배열 초기자(array initializer) [...str]로 전달됩니다.
//메서드 Array.from은 문자열 같은 이터러블 객체를 배열로 바꿔주기 때문에 Array.from을 사용해도 동일한 작업을 할 수 있습니다.

let s = 'Hello';
console.log(Array.from(s));

let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj };
console.log(objCopy);

/**
 * 
 * 요약
"..."은 나머지 매개변수나 전개 문법으로 사용됩니다.

나머지 매개변수와 전개 문법은 아래의 방법으로 구분할 수 있습니다.

...이 함수 매개변수의 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 '나머지 매개변수’입니다.
...이 함수 호출 시 사용되면 배열을 목록으로 확장해주는 '전개 문법’입니다.
사용 패턴:

인수 개수에 제한이 없는 함수를 만들 때 나머지 매개변수를 사용합니다.
다수의 인수를 받는 함수에 배열을 전달할 때 전개 문법을 사용합니다.
둘을 함께 사용하면 매개변수 목록과 배열 간 전환을 쉽게 할 수 있습니다.

조금 오래된 방법이긴 하지만 arguments라는 반복 가능한 유사 배열 객체를 사용해도 인수 모두를 사용할 수 있습니다.
 */

var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var objectThree = {
  //색상
  color: {
    primary: '#03a9f4',
    secondary: '#795548',
    white: '#FFFFFF',
    gray: '#CCCCCC',
    default: '#999999',
  },
  //글꼴 크기
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    sx: 10,
  },
  lineHeight: {
    xg: '60xp',
    lg: '54xp',
    md: '36xp',
    sm: '24xp',
    xs: '18xp',
  },
  //갈이 단위
  unit: 4,
};
var combined = { ...objectOne, ...objectTwo, ...objectThree };
var { ...othersw } = combined;

//console.log(othersw);
console.log({ ...objectThree });
