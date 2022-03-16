/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import style from './style.module.css';

/**
 * @param label - label for the Tab.
 * @param isActive - if the tab is active.
 * @param children - content of the tab.
 * @param icon  - icon for the tab.
 * @param variant - variant of the tab.
 * @returns {*}
 */

export default function Tab({
  label, isActive, icon, variant, ...rest
}) {
  if (rest !== undefined && rest.disabled === true) {
    // eslint-disable-next-line no-param-reassign
    isActive = false;
  }

  return (
    <button
      type="button"
      className={cx(
        style['tab-layout'],
        { [style[`tab-${variant}-active`]]: isActive },
        { [style['tab-inactive']]: !isActive },
      )}
      {...rest}
    >
      {rest.children !== undefined ? (
        rest.children
      ) : (
        <>
          {icon && <img src={icon} alt="" />}
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
Tab.propTypes = {
  /**
   * label for the Tab.
   */
  label: PropTypes.string,
  /**
   * if the tab is active.
   */
  isActive: PropTypes.bool,
  /**
   * icon for the tab.
   */
  icon: PropTypes.string,
  /**
   * variant of the tab.
   */
  variant: PropTypes.oneOf(['default', 'segment']),
};

Tab.defaultProps = {
  label: 'Tab',
  isActive: false,
  variant: 'default',
  icon: undefined,
};
