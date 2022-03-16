import React from 'react';
import SearchInputField from './index';

export default {
  title: 'Elements/SearchInputField',
  component: SearchInputField,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SearchInputField {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const searchInputFieldWithLabelDescription = Template.bind({});
searchInputFieldWithLabelDescription.args = {
  label: 'Label',
  description: 'Description to go here if any',
};

export const searchInputFieldOnError = Template.bind({});
searchInputFieldOnError.args = {
  label: 'Label',
  description: 'Description to go here if any',
  isError: true,
};

export const searchInputFieldOnSuccess = Template.bind({});
searchInputFieldOnSuccess.args = {
  label: 'Label',
  description: 'Description to go here if any',
  isError: false,
};

export const onErrorWithMessage = Template.bind({});
onErrorWithMessage.args = {
  label: 'Label',
  description: 'Description to go here if any',
  isError: true,
  helperText: 'This is helper-text.',
};

export const onSuccessWithMessage = Template.bind({});
onSuccessWithMessage.args = {
  label: 'Label',
  description: 'Description to go here if any',
  isError: false,
  helperText: 'This is helper-text.',
};
