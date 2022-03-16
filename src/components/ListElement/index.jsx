/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.module.css';

/**
 * @param text - text to be displayed.
 * @param count - number/count to be displayed.
 * @param isSelected - boolean to indicate whether the list element is selected or not.
 * @returns  - returns the list element.
 */
export default function ListElement({
  text, count, isSelected, ...rest
}) {
  if (text === undefined && count === undefined) return null;

  return (
    <div
      className={cx(style.listElement, {
        [style['listElement-selected']]: isSelected,
      })}
      tabIndex="0"
      {...rest}
    >
      {text !== undefined && <span>{text}</span>}
      {count !== undefined && (
        <div className={style.counter}>
          {' '}
          <span>
            {' '}
            {count}
          </span>
        </div>
      )}
    </div>
  );
}
ListElement.propTypes = {
  /**
   * text to be displayed.
   */
  text: PropTypes.string.isRequired,
  /**
   * number/count to be displayed.
   */
  count: PropTypes.number,
  /**
   * boolean to indicate whether the list element is selected or not.
   */
  isSelected: PropTypes.bool,
};

ListElement.defaultProps = {
  isSelected: false,
  count: undefined,
};
