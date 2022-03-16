import React from 'react';
import InsightsCard from '.';

export default {
  title: 'Elements/Card/InsightsCard',
  component: InsightsCard,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <InsightsCard {...args} />;
}

export const byDefault = Template.bind({});

export const withDefaultFooter = Template.bind({});
withDefaultFooter.args = {
  insightsDescription:
    'But unfortunately we had a lot of calls today and I have written for you for.',
  timeStamp: '1:23',
  chipText: 'task',
};
export const withCustomFooter = Template.bind({});
withCustomFooter.args = {
  insightsDescription:
    'But unfortunately we had a lot of calls today and I have written for you for.',
  timeStamp: '1:23',
  chipText: 'task',
  footerElement: (
    <div>
      This this Custom footer
    </div>
  ),
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};
