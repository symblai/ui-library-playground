/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import style from './style.module.css';
/**
 * Button Component
 */

export default function Button({
  variant,
  endIcon,
  startIcon,
  label,
  ...rest
}) {
  if (
    variant !== 'contained'
    && variant !== 'outlined'
    && variant !== 'default'
  ) {
    // eslint-disable-next-line no-param-reassign
    variant = 'default';
  }

  const getLabelsPosition = () => {
    /**
     * Deciding the position of the label according to the given icon.
     */
    if (label === undefined) {
      return 'none';
    }
    if (startIcon === undefined && endIcon === undefined) {
      return 'normal';
    }
    if (startIcon !== undefined && endIcon !== undefined) {
      return 'middle';
    }
    if (startIcon === undefined && endIcon !== undefined) {
      return 'left';
    }
    if (endIcon === undefined && startIcon !== undefined) {
      return 'right';
    }
    return 'normal';
  };

  const labelPosition = getLabelsPosition();

  return (
    <button
      type="button"
      className={cx(
        style[`label-${labelPosition}`],
        style[`button--${variant}`],
        style['button-layout'],
      )}
      {...rest}
    >
      <img src={startIcon} alt="" />
      <span>{label}</span>
      <img src={endIcon} alt="" />
    </button>
  );
}

Button.propTypes = {
  /**
   * variant of the button.
   */
  variant: PropTypes.oneOf(['default', 'contained', 'outlined']),
  /**
   * icon at the end.
   */
  endIcon: PropTypes.string,
  /**
   * icon at the start.
   */
  startIcon: PropTypes.string,
  /**
   * label to be displayed.
   */
  label: PropTypes.string,
};
Button.defaultProps = {
  variant: 'default',
  endIcon: undefined,
  startIcon: undefined,
  label: undefined,
};
