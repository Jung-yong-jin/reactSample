import React from 'react';

import { storiesOf, configure, setAddon } from '@storybook/react'; //스트리를 스토리북 도구에 추가해주는 storiesOf 함수를 임포트했습니다.
import { action } from '@storybook/addon-actions';
import { jsxDecorator } from 'storybook-addon-jsx';
import Input from '../03/Input'; //Input 컴포넌트를 임포트했습니다.

//storiesOf('Input' 스토리북 도구에 표시할 스토리의 이름을 입력했습니다.
//add('기본 설정', 스토리북 도구에 표시할 메뉴 이름을 입력했습니다.
storiesOf('Input', module)
  .addDecorator(jsxDecorator) //JSX 설정 부분
  .add('기본 설정', () => <Input name="name" />)
  .add('label 예제', () => <Input name="name" label="이름" />)
  .add('onChange 예제', () => <Input name="name" onChange={action('onChange 이벤트 발생')} />);
