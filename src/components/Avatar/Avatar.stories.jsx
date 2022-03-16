import React from 'react';
import Avatar from './index';

export default {
  title: 'Elements/Avatar',
  component: Avatar,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Avatar {...args} />;
}

export const initialsWithBorder = Template.bind({});
initialsWithBorder.args = {
  text: 'Symbl Ai',
  contained: true,
  textColor: '#3187e3',
  backgroundColor: '#D2F3EF',
};

export const initialsWithoutBorder = Template.bind({});
initialsWithoutBorder.args = {
  text: 'Symbl Ai',
  contained: false,
  textColor: '#3187e3',
  backgroundColor: '#D2F3EF',
};
export const customSizedAvatarWithInitials = Template.bind({});
customSizedAvatarWithInitials.args = {
  text: 'Symbl Ai',
  contained: false,
  textColor: '#3187e3',
  backgroundColor: '#D2F3EF',
  size: '4rem',
};

export const iconAvatar = Template.bind({});
iconAvatar.args = {
  src: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
  alt: 'icon only',

};
export const iconAvatarWithoutBorder = Template.bind({});
iconAvatarWithoutBorder.args = {
  src: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
  alt: 'icon only',
  contained: false,

};

export const customSizedAvatar = Template.bind({});
customSizedAvatar.args = {
  src: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
  alt: 'icon only',
  contained: false,
  size: '6.25rem',

};
/**
 * User can customize the Avatar, by passing the style argument.
 */
export const customizedAvatar = Template.bind({});
customizedAvatar.args = {
  src: 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png',
  alt: 'icon only',
  contained: false,
  size: '6.25rem',
  style: {
    borderRadius: '0px',
  },

};
