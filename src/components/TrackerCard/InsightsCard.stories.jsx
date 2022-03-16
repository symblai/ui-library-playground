import React from 'react';
import TrackerCard from '.';

export default {
  title: 'Elements/Card/TrackerCard',
  component: TrackerCard,
  argTypes: {
    onClick: { control: 'onClick' },
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TrackerCard {...args} />;
}

export const byDefault = Template.bind({});

export const prebuiltWithoutID = Template.bind({});
prebuiltWithoutID.args = {

  trackerName: 'Tracker 1',
  description: 'This is a description, LOREm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.',
  chipText: 'topic1',
};

export const prebuiltWithID = Template.bind({});
prebuiltWithID.args = {

  id: '1456',
  trackerName: 'Tracker 1',
  description: 'This is a description, LOREm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.',
  chipText: 'topic1',
};

export const selectedPrebuiltCard = Template.bind({});
selectedPrebuiltCard.args = {
  id: '1456',
  trackerName: 'Tracker 1',
  description: 'This is a description, LOREm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.',
  chipText: 'topic1',
  selected: true,
};

export const customTrackerCard = Template.bind({});
customTrackerCard.args = {
  id: '1456',
  trackerName: 'Tracker 1',
  description: (
    <div>
      <span style={{ fontFamily: 'Work Sans', fontWeight: 600, color: '#67788A' }}> VOCABULARY(10) </span>
      <li>This is a phrase.</li>
      <li>This is a phrase but little longer</li>

    </div>
  ),
  selected: true,
};
export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};
