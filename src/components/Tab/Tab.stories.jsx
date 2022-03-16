import React from 'react';
import Tab from './index';

export default {
  title: 'Elements/Tab',
  component: Tab,
  argTypes: {
    onClick: { control: 'onClick' },
  },

};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Tab {...args} />;
}

export const defaultInactive = Template.bind({});
defaultInactive.args = {};

export const defaultActive = Template.bind({});
defaultActive.args = {
  isActive: true,
};

export const defaultDisabled = Template.bind({});
defaultDisabled.args = {
  disabled: true,
};

export const segmentInactive = Template.bind({});
segmentInactive.args = {
  variant: 'segment',
};

export const segmentActive = Template.bind({});
segmentActive.args = {
  variant: 'segment',
  isActive: true,
};

export const tabWithIcon = Template.bind({});
tabWithIcon.args = {
  icon: 'https://cdn-icons-png.flaticon.com/512/6336/6336634.png',
  variant: 'segment',
  isActive: true,
};
