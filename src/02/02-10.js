//기존 자바스크립트의 비동기 함수 처리 방법 알아보기
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료!'), 100); //1 100ms의 지연 작업을 하는 work1() 함수를 선언했습니다. 지연 작업 완료 후에는 onDone() 함수가 실행됩니다.
}

function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 100); //2 200ms의 지연 작업을 하는 work1() 함수를 선언했습니다. 지연 작업 완료 후에는 onDone() 함수가 실행됩니다.
}

function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 100); //3 300ms의 지연 작업을 하는 work1() 함수를 선언했습니다. 지연 작업 완료 후에는 onDone() 함수가 실행됩니다.
}

function urgentWork() {
  console.log('긴급 작업');
}

work1(function (msg1) {
  //지연 작업 함수를 실행 합니다.
  console.log('done after 100ms:' + msg1);
  work2(function (msg2) {
    console.log('done after 300ms:' + msg2);
    work3(function (msg3) {
      console.log('done after 600ms:' + msg3);
    });
  });
});

urgentWork(); //지연 작업 완료 시간을 기다리지 않고 바로 실행되는 함수 입니다.
