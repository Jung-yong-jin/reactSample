import React from 'react';
import { shallow } from 'enzyme';

import Input from '../03/Input';

describe('<Input enzyme>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="name" />); //shallow() 함수 안에 input컴포넌트를 직접 넣었습니다.
    }).not.toThrow(); //jest의 toThrow() 함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 검사하고, 오류가 발생하지 않으면 테스트를 통과합니다.
  });

  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1); //expect() 함수가 반환한 toEqual() 함수를 사용하여 반환된 객체의 수를 비교합니다.
    expect(wrapper).toHaveLength(1); //expect() 함수가 반환한 toHaveLength() 함수를 사용하여 .length값을 비교합니다.
  });
});
