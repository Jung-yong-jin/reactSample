import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

//describe와 it은 jest에서 제공하는 함수입니다. describe는 하나의 테스트 그룹이고, it은 그 안의 작은 단위 테스트입니다.
//enzyme에는 adapter를 적용하는 configure를 제외하면 크게 세 가지 메소드가 있습니다. shallow, mount, render 입니다.
//shallow: 간단한 컴포넌트를 메모리 상에 렌더링합니다. 단일 컴포넌트를 테스트할 때 유용합니다.
//mount: HOC나 자식 컴포넌트까지 전부 렌더링합니다. 다른 컴포넌트와의 관계를 테스트할 때 유용합니다.
//render: 컴포넌트를 정적인 html로 렌더링합니다. 컴포넌트가 브라우저에 붙었을때 html로 어떻게 되는지 판단 할 때 사용합니다.

//expect는 jest에서 제공하는 것으로 테스트값과 예상값이 일치하는지 여부를 판단합니다. 일치한다면 테스트가 성공한 것이고, 일치하지 않는다면 테스트가 실패한 것입니다.
describe('<Input />', () => {
  it('성공적으로 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toBe(1);
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="name" />); //shallow: 간단한 컴포넌트를 메모리 상에 렌더링합니다. 단일 컴포넌트를 테스트할 때 유용합니다.
    }).not.toThrow(); //jest의 toThrow() 함수를 사용하여 입력 컴포넌트가 출력되는 동안 오류가 발생하는지 검사하고, 오류가 발생하지 않으면 테스트를 통과합니다.
  });

  it('has one element', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.length).toEqual(1); //expect() 함수가 반환한 toEqual() 함수를 사용하여 반환된 객체의 수를 비교합니다.
    expect(wrapper).toHaveLength(1); //expect() 함수가 반환한 toHaveLength() 함수를 사용하여 .length값을 비교합니다.
  });

  it('인풋이 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('라벨 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('label')).toHaveLength(1);
  });

  it('span 렌더링되어야 합니다.', () => {
    const wrapper = shallow(<Input name="test_name" errorMessage="error" />); //shallow() 함수는 컴포넌트를 출력한 후 컴포넌트를 검사할 수 있는 enzyme 객체를 반환합니다. enzyme 객체는 find() 함수를 포함하고 있습니다.
    expect(wrapper.find('span')).toHaveLength(1); //find()함수의 인자로 'span'을 전달하여 출력된 DOM에서 span 엘리먼트를 찾습니다. toHaveLength() 함수로 반환된 엘리먼트의 갯수를 검증합니다.
  });

  //prop(), props() 함수로 프로퍼티에 전달된 값 검증하기
  it('프로퍼티에 전달된 값 검증', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" type="text" value={expectedValue} />);
    expect(wrapper.find('input').prop('value')).toBe(expectedValue); //prop()함수를 사용하여 value의 프로퍼티값과 컴포넌트에 전달된 값을 검증합니다.

    //분할 구조
    const { type, value } = wrapper.find('input').props(); //객체 추출식을 사용해 필요한 프로퍼티 항목을 추출합니다.
    expect(value).toBe(expectedValue); //props 함수를 사용해 프로퍼티(value) 값을 추출
    expect(type).toBe('text'); //props 함수를 사용해 프로퍼티(type) 값을 추출
  });

  it('프로퍼티값 전달 하기', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('.error')).toHaveLength(0); //error 스타일을 포함한 오류 메시지가 존재하는지 검사합니다.

    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';
    wrapper.setProps({ errorMessage: expectedErrorMessage }); //setProps() 함수로 errorMessage 프로퍼티의 값을 변경합니다.

    expect(wrapper.find('span').prop('className')).toBe('error');
    expect(wrapper.find('.error')).toHaveLength(1); //errorMessage 프로퍼티가 추가되었기 때문에 error 스타일을 포함한 오류 메시지 1개가 정성적으로 포함된 겂을 확인 합니다.
    console.log(wrapper.html());
    expect(wrapper.html()).toContain(expectedErrorMessage); //html() 함수를 사용하여 출력된 HTML에서 실제 오류 메시지가 정상적으로 출력되었는지 검증합니다.
  });

  it('가상의 이벤트 검사하기', () => {
    const changeStub = jest.fn(); //jest는 감시 함수(fn()) 를 제공하여 생성된 함수의 호출을 감시하는 방법을 제공합니다.
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />); //생성된 함수를 입력 컴포넌트의 onChange 프로퍼티에 할당합니다.
    expect(changeStub).not.toHaveBeenCalled(); //이벤트 재현 시점을 기준으로 이벤트 실행 이전에는 콜백 함수가 호출되지 않는 상태를 expect() 함수의 호출 검증 메소드 toHaveBeenCalled()로 검증합니다.

    const expectedTargetValue = 'updated input';
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } }); //enzyme의 이벤트 재현 메소드를 사용하여 input값이 변경되는 이벤트(onChange)를 재현합니다. 재현을 위해 실제 브라우저에서 전달할 값을 전달해야 합니다. target.value에 값이 전달되므로 객체형으로 가상의 입력값을 전달했습니다.

    expect(changeStub).toHaveBeenCalledTimes(1); //fn() 함수로 반환된 콜백 함수를 expect() 함수의 호출 검증 메소드(toHaveBeenCalledTimes, toHaveBeenCalledWith)로 호출 횟수와 호출 인자들을 검사합니다.
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue); //
  });
});
