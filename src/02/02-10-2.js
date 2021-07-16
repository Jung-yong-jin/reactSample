//ES6의 비동기 함수 처리 방법
const work1 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료!'), 1000);
  });

const work2 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료!'), 2000);
  });

const work3 = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 완료!'), 3000);
  });

function urgentWork() {
  console.log('긴급 작업');
}

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return work2();
};

work1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return work3();
  })
  .then((msg3) => {
    console.log('done after 600ms:' + msg3);
  });

urgentWork();
