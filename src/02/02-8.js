//기존 자바스크립트의 객체 확장 표현식 사용 방법 알아보기
var x = 0;
var y = 0;
//obj에 대입한 객체를 보면 키 이름이 키값과 동일(각각 x, y) 합니다.
var obj = { x: x, y: y };
var randomKeyString = 'other';
var combined = {};
//연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야 합니다.
combined[`one${randomKeyString}`] = 'some value';

console.log(combined);

//객체에 함수를 추가할 때는 변수에 함수를 할당해야 합니다.
var obj2 = {
  x: x,
  methodA: function () {
    console.log('method A');
  },
  methodB: function () {
    return 0;
  },
};

//ES6의 객체 확장 표현식 사용 방법 알아보기
var x = 0;
var y = 0;
var obj = { x, y }; //객체의 변수를 선언할 때 키값을 생략하면 자동으로 키의 이름으로 키값을 지정합니다.
var randomKeyString = 'other';
var combined = {
  ['one' + randomKeyString]: 'some value', //객체 생성 블록 안에 대괄호([])를 사용하여 표현식을 작성하면 추가하여 계산된 키값을 생성할 수 있습니다.
};

var obj2 = {
  x,
  methodA() {
    console.log('ES6 method A'); //function 키워드를 생략하여 함수를 선언할 수 있습니다.
  },
  methodB() {
    return 1;
  },
};

console.log(obj);
console.log(combined);
console.log(obj2);

//기존 자바스크립트의 구조 분해 사용 방법 알아보기
var list = [0, 1];
var item1 = list[0]; //배열의 인덱스를 사용하여 변수에 할당합니다.
var item2 = list[1];
var item3 = list[2] || -1; //2

//3 배열의 두 값을 치환했습니다.
var temp = item2;
item2 = item1;
item1 = temp;
var obj = {
  key1: 'one',
  key2: 'two',
};

var key1 = obj.key1; //객체의 키값을 변수에 할당했습니다.
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; //|| 연산자를 이용하여 객체의 해당 키값이 없으면 기본값으로 할당 합니다.
var newkey1 = obj.key1; // 객체의 키값을 다른 변수에 할당합니다.

//ES6의 구조 분해와 구조 할당 사용 방법
var list = [0, 1];
//대괄호 블록[] 사이에 추출 하고자 하는 값의 인텍스 위치에 변수를 배치
var [item1, item2, item3 = -1] = list;
[item2, item1] = [ㅊㅇ, item2];

var obj = {
  key1: 'one1',
  key2: 'two2',
};

var {
  key1: newKey1, //콜론(:) 부호와 함께 새 변수명을 선언하여 추출된 키값을 다른 변수명으로 할당
  key2,
  key3 = 'default key4 value', //선언 부호(=)를 변수와 함께 사용하여 기본값을 할당
} = obj;
console.log(newKey1);
console.log(key2);
console.log(key3);
