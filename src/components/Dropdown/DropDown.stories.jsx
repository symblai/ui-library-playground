import React from 'react';
import DropDown from '.';
import { ListElement } from '..';

export default {
  title: 'Elements/DropDown',
  component: DropDown,
  argTypes: {
    onClick: { control: 'onClick' },
  },

};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DropDown {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  label: '😎 This is a dropdown',
  children: [
    <ListElement text="✔ Option 1" count={11} />,
    <ListElement text="✔ Option 2" count={12} />,
    <ListElement text="✔ Option 3" count={0} />,
    <ListElement text="✔ Option 4" />,
  ],
};
