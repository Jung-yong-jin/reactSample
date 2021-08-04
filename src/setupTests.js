// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
//import '@testing-library/jest-dom';

//enzyme 설정 함수 configure()를 임포트 합니다.
import { configure } from 'enzyme';
//리액트 16.3 생명주기 라이브러리를 임포트 합니다.
import Adapter from 'enzyme-adapter-react-16.3';

import * as Aphrodite from 'aphrodite';
import * as AphroditeNoImportant from 'aphrodite/no-important';

//아프로디테의 DOM 함수호출과정을 중지 시킴
Aphrodite.StyleSheetTestUtils.suppressStyleInjection();
AphroditeNoImportant.StyleSheetTestUtils.suppressStyleInjection();

//테스트 환경에 enzyme을 새 버전 생명주기 함수와 함께 추가합니다.
configure({ adapter: new Adapter() });

//테스트 코드가 실행되기 이전
beforeEach(() => {
  //console.log('befor');
  // jest.spyOn(console, 'eror').mockImplementation((e) => {
  //감시 함수 spyOn()을 사용하여 console객체의 error()함수를 실제 기능 대신 mockImplementation에 정의된 함수가 실행되도록 합니다.
  //throw new Error(e); //console.error() 함수를 실행할 때 전달된 인자로 오류를 발행하도록 합니다.
  //});
});

//테스트 코드가 실행된 이후
afterEach(() => {
  //console.log('after');
  //console.error.mockClear(); //console.error() 함수 객체에 spyOn() 함수로 추가된 가상의 감지 코드를 제거합니다.
});
