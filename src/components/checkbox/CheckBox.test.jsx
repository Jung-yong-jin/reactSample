import React from 'react';
import { shallow, mount } from 'enzyme';

import CheckBox from './CheckBox';

describe('<CheckBox /> Test', () => {
  it('renders without crashing', () => {
    //render() 함수의 오류 발생 여부를 검증합니다.
    const wrapper = () => shallow(<CheckBox name="required">테스트</CheckBox>);
    expect(wrapper).not.toThrow();
  });

  it('displays errorMessage', () => {
    const errorMessage = '오류메시지';
    const wrapper = shallow(
      <CheckBox name="required" errorMessage={errorMessage}>
        테스트
      </CheckBox>,
    )
      .dive()
      .html(); //enzyme의 html() 함수를 사용하여 출력된 HTML을 문자열로 변환합니다.
    console.log(String(wrapper));
    expect(wrapper).toContain(errorMessage); //expect() 함수가 반환한 toContain() 함수를 사용하여 HTML에 오류 메시지가 포함되었는지 검증합니다.
  });

  it('calls back onChange on clicked', () => {
    const changeStub = jest.fn(); //jest의 fn() 함수를 사용하여 콜백 함수 검증을 위한 감시 함수를 생성합니다.
    expect(changeStub).toHaveBeenCalledTimes(0);
    const wrapper = mount(
      <CheckBox name="test_name" onChange={changeStub}>
        테스트
      </CheckBox>,
    );

    expect(wrapper).toHaveLength(1);
  });
});
