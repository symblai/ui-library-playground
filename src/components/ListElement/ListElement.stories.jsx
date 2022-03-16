import React from 'react';
import ListElement from '.';

export default {
  title: 'Elements/ListElement',
  component: ListElement,
  argTypes: {
    onClick: { control: 'onClick' },
  },

};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ListElement {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  text: 'List',
};

export const withCount = Template.bind({});
withCount.args = {
  text: 'List',
  count: 20,
};

export const selectedList = Template.bind({});
selectedList.args = {
  text: 'List',
  isSelected: true,
};

export const selectedListWithCounter = Template.bind({});
selectedListWithCounter.args = {
  text: 'List',
  count: 30,
  isSelected: true,
};
export const customWidth = Template.bind({});
customWidth.args = {
  text: 'List',
  count: 30,
  isSelected: true,
  style: {
    width: '40%',
  },
};

// export const disabled_list = Template.bind({});
// disabled_list.args = {
//     text: "List",
//     isSelected: true,
//     disabled: true
// };
