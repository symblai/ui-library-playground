import React from 'react';
import Chip from './index';

export default {
  title: 'Elements/Chip',
  component: Chip,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Chip {...args} />;
}

export const withInitials = Template.bind({});
withInitials.args = {
  text: 'Symbl Ai',
  type: 'initial',
};

export const withEmoji = Template.bind({});
withEmoji.args = {
  text: 'Chip here',
  type: 'emoji',
  emoji: '😎',
};

export const withProfile = Template.bind({});
withProfile.args = {
  text: 'Chip here',
  type: 'profile',
  imgSrc: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
};

export const Basic = Template.bind({});
Basic.args = {
  text: 'Chip here',
  type: 'basic',
};

export const SelectableChipWithInitials = Template.bind({});
SelectableChipWithInitials.args = {
  text: 'Chip here',
  type: 'initial',
  isSelectable: true,
};

export const SelectableChipWithEmoji = Template.bind({});
SelectableChipWithEmoji.args = {
  text: 'Chip here',
  type: 'emoji',
  isSelectable: true,
};

export const SelectableChipWithProfile = Template.bind({});
SelectableChipWithProfile.args = {
  text: 'Chip here',
  type: 'profile',
  imgSrc: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
  isSelectable: true,
};

export const SelectableBasicChip = Template.bind({});
SelectableBasicChip.args = {
  text: 'Chip here',
  type: 'basic',
  isSelectable: true,
};

export const DisabledBasicChip = Template.bind({});
DisabledBasicChip.args = {
  text: 'Chip here',
  type: 'basic',
  disabled: true,
};

export const DisabledInitialsChip = Template.bind({});
DisabledInitialsChip.args = {
  text: 'Chip here',
  type: 'initial',
  disabled: true,
};

export const DisabledProfileChip = Template.bind({});
DisabledProfileChip.args = {
  text: 'Chip here',
  type: 'profile',
  disabled: true,
  imgSrc: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
};
