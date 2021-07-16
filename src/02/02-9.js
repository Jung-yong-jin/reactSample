function parse(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = parts[1];
    result[key] = value;
  }

  return result;
}

function parseNumber(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }

  return result;
}

console.log(parse('banana=10&apple=20&orange=30'));
console.log(parseNumber('banana=10&apple=20&orange=30'));

//ES6의 forEach() 함수를 사용하면 반복문의 순번(i++)과 배열의 크기(chunks.length) 생략할 수 있다.
function parse1(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((element) => {
    const parts = element.split('=');
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });

  return result;
}

console.log(parse1('banana=10&apple=20&orange=30'));

//키와 키값을 구조 분해 할당 방식으로 변환하면 위의 코드를 조금 더 간결하게 할 수 있다.
function parse2(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((element) => {
    const [key, value] = element.split('=');
    result[key] = value;
  });

  return result;
}

console.log(parse2('banana=10&apple=20&orange=30'));

//map() 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결과값을 새 배열로 반환 합니다.
function parse3(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');
  const result = chunks.map((element) => {
    const [key, value] = element.split('=');
    return { key: key, value: value };
  });

  return result;
}

console.log(parse3('banana=10&apple=20&orange=30'));

//배열을 객체로 변환하고 싶다면 reduce() 함수를 사용
//실무에서 reduce() 함수는 보통 배열을 특정 자료형으로 변환하는데 사용합니다.
//즉, 배열의 총합을 구하는 예제는 단순히 합을 구하는 예제가 아니라 배열을 숫자로 변환한예제로 이해해야 합니다.
function sum(numbers) {
  return numbers.reduce((total, num) => {
    console.log(total);
    console.log(num);
    return total + num;
  }, 0);
}

//map 함수를 이용하여 배열로 반환한 값을 reduce 를 이용하여 객체로 변환하여 반환
function parse4(qs) {
  const queryString = qs.substr(0);
  const chunks = queryString.split('&');

  return chunks
    .map((element) => {
      const [key, value] = element.split('=');
      return { key: key, value: value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(parse4('banana=10&apple=20&orange=30'));
