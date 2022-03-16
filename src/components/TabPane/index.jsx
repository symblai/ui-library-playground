/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/**
 * Not the part of planned design System. Its here just to show case the use of Tab component.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/index';

export default function TabPane({
  tabs, content, variant, ...rest
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length !== content.length) {
    return null;
  }

  return (
    <>
      <div style={{ display: 'flex' }} {...rest}>
        {tabs.map((value, index) => (
          <Tab
            label={value.label}
            disabled={value.disabled}
            key={index}
            variant={variant}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {content[activeIndex]}
      </div>
    </>
  );
}

TabPane.propTypes = {
  /**
   * array of tabs.
   */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  /**
   * array of content.
   */
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
  /**
   * variant of the tab.
   */
  variant: PropTypes.oneOf(['default', 'segment']),
};

TabPane.defaultProps = {
  variant: 'default',
};
