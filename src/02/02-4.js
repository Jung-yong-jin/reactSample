//가변 변수와 불변 변수

//가변 변수는 let 키워드로 선언합니다.
let num = 1;
num = num * 3;
let str = '문자';
str = '다른문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = { name: '새 객체' };

//불변 변수는 const 키워드로 선언합니다.
//그런데 불변 변수는 값을 다시 할당할 수 없는 것이지 값을 변경할 수는 있습니다.

//불변 변수를 값을 다시 할당 할 시 타입에러가 발생
//const num = 1;
//num = 3; // 타입 에러가 발생합니다

//const str = '문자';
//str = '새 문자'; // 타입 에러가 발생합니다

//const arr = [];
//arr = [1, 2, 3]; // 타입 에러가 발생합니다

//const obj = {};
//obj = { name: '내 이름' }; // 타입 에러가 발생합니다

//불변 변수를 내장함수를 이용하여 값을 변경
//불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것을 암묵적으로 금지하여 무결성을 유지하겠습니다.
const arr2 = [];
arr2.push(1);
//하나도 제거하지 않고, 0번 인덱스에 "0" 추가
arr2.splice(0, 0, 0);
//하나도 제거하지 않고, 0번 인덱스에 "2" 추가
arr2.splice(1, 0, 2);
//1번 인덱스에 한개 요소 제거하고, "3", "4" 추가
arr2.splice(1, 1, 3, 4);
//pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
console.log(arr2.pop());
console.log(arr2);

const obj2 = {};
obj2['name'] = '내이름';
console.log(obj2.name);
Object.assign(obj2, { name: '새이름' });
console.log(obj2.name);
delete obj2.name;
console.log(obj2);

//무결성을 유지하면서 불변 변수의 값을 수정 할때는 불변 변수를 새로 만들어 새값을 할당하는 방법으로 수정해야 합니다.
const num1 = 1;
const num2 = num1 * 3;
const str1 = '문자';
const str2 = `${str1} 추가`;
const arr3 = [];

//concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
const arr4 = arr3.concat(1);
const arr5 = [...arr4, 2, 3]; // arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); //arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; //arr7 = [2, 3], first = 1

const obj3 = { name: '', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' }; // obj4 = {name: '새이름', age: 20}
const { name, ...obj5 } = obj4; //obj5 = {age: 20};
console.log(num2);
console.log(str2);
console.log('arr3 : ', arr3);
console.log('arr4 : ', arr4);
console.log('arr5 : ', arr5);
console.log('arr6 : ', arr6);
console.log('first : ', first);
console.log('arr7 : ', arr7);
console.log('obj4 : ', obj4);
console.log('obj5 : ', obj5);
console.log('name : ', name);
