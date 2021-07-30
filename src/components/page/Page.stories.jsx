import React from 'react';
import Page from './Index';

export default {
  title: 'Example/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const pageStories = Template.bind({});
pageStories.args = {};
