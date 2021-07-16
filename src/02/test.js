function getData() {
  return new Promise(function (resolve, reject) {
    resolve('hi');
  });
}

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

work1()
  .then(function (result) {
    console.log(result);
    //throw new Error('Error in then()');
    return work2();
  })
  .then(function (result) {
    console.log(result);
    //throw new Error('Error in then()');
    return work3();
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log('then error : ', err);
  });
