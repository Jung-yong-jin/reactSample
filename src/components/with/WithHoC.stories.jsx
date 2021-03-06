import React from 'react';
import Button from '../button/index';
import Text from '../text/Index';
import WithHoc from './WithHoC';

export default {
  title: 'Example/WithHoc',
  component: WithHoc,
};

const ButtonWithHoC = WithHoc(Button);
const TextWithHoC = WithHoc(Text);

const Template = (args) => (
  <div>
    <ButtonWithHoC {...args}>안녕하세요</ButtonWithHoC>
    <TextWithHoC {...args}>안녕하세요</TextWithHoC>
  </div>
);

export const 기본_설정 = Template.bind({});
기본_설정.args = {};

export const large_sample = Template.bind({});
large_sample.args = { large: true };
