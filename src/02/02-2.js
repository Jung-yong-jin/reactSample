//병합연산자 (+)
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = string1 + ' ' + string2; //병합 연산자를 사용해 문자열과 문자열을 연결하고 있습니다.
var product = { name: '도서', price: '4200원' };
var messgae = '제품' + product.name + '의 가격은' + product.price + '입니다.'; //문자열과 변수를 연결할 때도 병합 연산자를 사용합니다.
var multiLine = '문자열1\n문자열2'; //줄바꿈을 할 때는 이스케이프 시퀀스(\n)를 문자열에 포함시킵니다.
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = '곱셈값은' + value1 * value2 + '입니다.';
var operator2 = '불리언값은' + (boolValue ? '참' : '거짓') + '입니다';
console.log(operator1);

//템플릿 문자열 '' 대신 `` 백틱으로 문자열을 표현합니다.
greeting = `${string1} ${string2}`; // ${} 기호를 사용하여 변수를 포함 했습니다.
message = `제품 ${product.name}의 가격은 ${product.price} 입니다.`;
multiLine = `문자열1
문자열2`; //템플릿 문자열은 Enter를 눌러 줄을 바꾸는 것도 허용하여, 이스케이프 시퀀스를 사용하지 않아도 됩니다.
operator1 = `곱셈값은 ${value1 * value2} 입니다.`; //$기호를 사용하여 연산자을 포함시킬 수도 있습니다.
operator2 = `${boolValue ? '참' : '거짓'} 입니다.`;
console.log(greeting);
console.log(message);
console.log(multiLine);
console.log(operator1);
console.log(operator2);

var cart = { name: '도서', price: 1500 };
var getTotal = function (cart) {
  return `${cart.price} 원`;
};

var myCart = `장바구니에 ${cart.name} 가 있습니다. 총 금액은 ${getTotal(cart)} 입니다.`;
console.log(myCart);
