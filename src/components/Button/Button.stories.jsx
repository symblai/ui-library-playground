import React from 'react';
import Button from './index';
import shareWhite from '../../assets/Share.svg';
import shareBlue from '../../assets/ShareBlue.svg';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    onClick: { control: 'onClick' },
  },

};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me !',
  variant: 'default',
};
export const DefaultWithIconAtStart = Template.bind({});
DefaultWithIconAtStart.args = {
  label: 'Click Me !',
  variant: 'default',
  startIcon: shareBlue,
};
export const DefaultWithIconAtEnd = Template.bind({});
DefaultWithIconAtEnd.args = {
  label: 'Click Me !',
  variant: 'default',
  endIcon: shareBlue,
};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  label: 'Click Me !',
  variant: 'default',
  disabled: true,
};

export const Contained = Template.bind({});
Contained.args = {
  label: 'Click Me !',
  variant: 'contained',
};
export const ContainedWithIconAtStart = Template.bind({});
ContainedWithIconAtStart.args = {
  label: 'Click Me !',
  variant: 'contained',
  startIcon: shareWhite,
};
export const ContainedWithIconAtEnd = Template.bind({});
ContainedWithIconAtEnd.args = {
  label: 'Click Me !',
  variant: 'contained',
  endIcon: shareWhite,
};
export const DisabledContained = Template.bind({});
DisabledContained.args = {
  label: 'Click Me !',
  variant: 'contained',
  endIcon: shareWhite,
  disabled: true,
};
export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Click Me !',
  variant: 'outlined',
};
export const OutlinedWithIconAtStart = Template.bind({});
OutlinedWithIconAtStart.args = {
  label: 'Click Me !',
  variant: 'outlined',
  startIcon: shareBlue,
};

export const OutlinedWithIconAtEnd = Template.bind({});
OutlinedWithIconAtEnd.args = {
  label: 'Click Me !',
  variant: 'outlined',
  endIcon: shareBlue,
};
export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  label: 'Click Me !',
  variant: 'outlined',
  disabled: true,
};

export const defaultIconButton = Template.bind({});
defaultIconButton.args = {
  variant: 'default',
  startIcon: shareBlue,
};
export const outlinedIconButton = Template.bind({});
outlinedIconButton.args = {
  variant: 'outlined',
  startIcon: shareBlue,
};
export const containedIconButton = Template.bind({});
containedIconButton.args = {
  variant: 'contained',
  startIcon: shareWhite,
};

export const customizedStyle = Template.bind({});
customizedStyle.args = {
  label: 'Click Me !',
  variant: 'outlined',
  disabled: true,
  style: {
    backgroundColor: '#00bcd4',
    color: '#fff',
    border: '1px solid #00bcd4',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};
