//디바운스의 개념
//내용을 입력하다가 특정 시간 동안 대기하고 있으면 마지막에 입력된 내용을 바탕으로 서버 요청을 하는 방법
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 100);

run('a');
run('b');
run(2);

//스로틀의 개념 알아보기
//입력되는 동안에도 바로 이전에 요청한 작업을 주기적으로 실행한다
function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);

      lastFunc = setTimeout(function () {
        if (Date.now() >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset; //-517
  if (currentScrollPosition >= pageBottomPosition) {
    console.log('다음 페이지 로딩');
  }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
