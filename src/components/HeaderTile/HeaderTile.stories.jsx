import React from 'react';
import HeaderTile from '.';

export default {
  title: 'Elements/HeaderTile',
  component: HeaderTile,
  args: { ...HeaderTile.defaultProps },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <HeaderTile {...args} />;
}

export const Default = Template.bind({});
Default.args = {};

export const WithBackgroundAndSpeakers = Template.bind({});
WithBackgroundAndSpeakers.args = {
  title: '🚀 SymblAi: All-Hand Meet !',
  backgroundImg: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F08%2FDark-Wallpaper-Desktop-Background.jpg&f=1&nofb=1',
  speakers: [
    {
      name: 'Tejas',
      profilePic: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.newsapi.com.au%2Fimage%2Fv1%2Fd14e1b9e140bd6398893cc3f5714c867&f=1&nofb=1',
    },
    {
      name: 'Sym',
      profilePic: 'https://s3-alpha-sig.figma.com/img/0b89/9e1a/fa06a93c37c24e48412a1707e7cb730e?Expires=1647820800&Signature=QWtP10C8AywNgSGafQxMOz8ZHC~uSUdNdVdWZ-RfhGPtYPBghLcEIyTb1YsNdYDX~J7uE1XDZuO~YRzMcdcvQWLht9oyjqv30exRWUhfvlGiYKhdU-8UkVRjlJavy4LqKbB6Bjy8ErCjmC9iBgg1gZOYJ7-qUhPa5VHf0wPuhFyvcKHMlVb6N6gmELFtF08Ue42ia01ILe9bDJWkeB~fBDB1faT6HvU2u0ykHLKU7iJqxRqVpv8ioIMpXh9Gn4UoP3-CREciq4EWTFluNmAGYbpZjUh7ukJaE8lNkbsepENtu86d7-dZzjlheySVKKeDeLTk5Y9ppxlqe6eVMawOVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    },
    {
      name: 'Rajshekhar',
      profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ninjaonlinedating.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F08%2FSmileModifiedKRAK.jpg&f=1&nofb=1',
    },
  ],

};
