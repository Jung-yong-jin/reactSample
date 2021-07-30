import React from 'react';
import Text from './Index';

export default {
  title: 'Example/Text',
  component: Text,
};

const Template = (args) => <Text {...args}>TestSample</Text>;
export const textStories = Template.bind({});
textStories.args = {
  xsmall: true,
  primary: true,
};

export const large_Sample = Template.bind({});
large_Sample.args = {
  xsmall: true,
  primary: true,
};

export const xlarge_Sample = Template.bind({});
xlarge_Sample.args = {
  xsmall: true,
  primary: true,
};

export const small_Sample = Template.bind({});
small_Sample.args = {
  xsmall: true,
  primary: true,
};

export const xsmall_Sample = Template.bind({});
xsmall_Sample.args = {
  xsmall: true,
  primary: true,
};

export const primary_Sample = Template.bind({});
primary_Sample.args = {
  xsmall: true,
  primary: true,
};

export const secondary_Sample = Template.bind({});
secondary_Sample.args = {
  xsmall: true,
  primary: true,
};
