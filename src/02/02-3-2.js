// ES5 예제
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = {
  one: objectOne.one, //키에 해당하는 값을 추출했습니다.
  two: objectOne.two,
  three: objectTwo.three,
  four: objectTwo.four,
};

//객체 내장 함수 assign()을 사용하여 두 객체를 병합했습니다.
//assign()의 첫 번째 인자는 결과로 반환 할 객체이며 ({}), 나머지 인자는 병합할 객체입니다.
//이때 병합할 객체는 앞에 있는 객체부터 덮어씁니다.
//중복된 키값이 있으면 objectTwo의 값으로 덮어씁니다
var combined = Object.assign({}, objectOne, objectTwo);
// combined = { one: 1, two: 2, three: 3, four: 4, other: -1}

var combined = Object.assign({}, objectTwo, objectOne);
// combined = { one: 1, two: 2, three: 3, four: 4, other: 0}

//delete 연산자는 객체의 속성을 제거합니다. 제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수합니다.
var others = Object.assign({}, combined);
delete others.other;
// others { three: 3, four: 4, one: 1, two: 2 }

//ES6 전개 연산자를 사용
var objectOne = { one: 1, two: 2, other: 0 };
var objectTwo = { three: 3, four: 4, other: -1 };

var combined = { ...objectOne, ...objectTwo };
console.log(combined);

var combined = { ...objectTwo, ...objectOne };
console.log(combined);

var { other, ...othersw } = combined;
console.log(other);
console.log(othersw);
