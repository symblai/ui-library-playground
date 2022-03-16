import React from 'react';
import TabPane from './index';

export default {
  title: 'Elements/TabPane',
  component: TabPane,
  argTypes: {
    onClick: { control: 'onClick' },
  },

};

const content1 = <>Hello there</>;
const content2 = <>Bye there</>;
const content3 = <>Bye Bye</>;

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TabPane {...args} />;
}

export const withDefaultTabs = Template.bind({});
withDefaultTabs.args = {
  tabs: [
    { label: 'tab1', disabled: false },
    { label: 'tab2', disabled: true },
    { label: 'tab3', disabled: false }],
  content: [content1, content2, content3],
};

export const withSegmentTabs = Template.bind({});
withSegmentTabs.args = {
  tabs: [
    { label: 'tab1', disabled: false },
    { label: 'tab2', disabled: true },
    { label: 'tab3', disabled: false }],
  content: [content1, content2, content3],
  variant: 'segment',
};
