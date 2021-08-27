import React from 'react';
import Button from '../button/index';
import Text from '../text/Index';
import WithLoading from './withLoading';

export default {
  title: 'Example/loading',
  component: WithLoading,
};

const TextWithLoading = WithLoading('로딩중...............')(Text);
const ButtonWithLoading = WithLoading(<Button disabled>로딩중...</Button>)(Button);
 

const Template = (args) => (
  <div>
    <ButtonWithLoading {...args}>안녕하세요</ButtonWithLoading>
    <TextWithLoading {...args}>안녕하세요</TextWithLoading>
  </div>
);

export const 기본_설정 = Template.bind({});
기본_설정.args = {isLoading: true};

export const 기본_설정2 = Template.bind({});
기본_설정2.args = {isLoading: false};