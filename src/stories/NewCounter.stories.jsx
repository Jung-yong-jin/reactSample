import React from 'react';

import NewCounter from '../03/NewCounter';

export default {
  title: 'Example/NewCounter',
  component: NewCounter,
};

const Template = (args) => <NewCounter {...args} />;

export const NewCounterComponent = Template.bind({});
NewCounterComponent.args = {
  count: 0,
};
