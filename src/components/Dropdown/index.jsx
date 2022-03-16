/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import ListElement from '../ListElement';
import style from './style.module.css';
import CaretDown from '../../assets/CaretDown.svg';

export default function Dropdown({
  label, options, children, ...rest
}) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={style.dropdown} tabIndex="0" {...rest}>
      <div
        role="button"
        tabIndex="-1"
        className={style['dropdown-btn']}
        onClick={() => setIsActive(!isActive)}
      >
        {label}
        <img
          className={cx({ [style['caret-up']]: isActive })}
          src={CaretDown}
          alt="..."
        />
      </div>

      {isActive && (
        <div className={style['dropdown-content']}>
          {children !== undefined
            && children !== null
            && children.map((option, index) => (
              <div
                onClick={() => {
                  setIsActive(false);
                }}
                className={style['dropdown-item']}
                key={index}
              >
                {option}
              </div>
            ))}

          {options !== null
            && options !== undefined
            && options.map((option, index) => (
              <div
                onClick={() => {
                  setIsActive(false);
                }}
                className={style['dropdown-item']}
                key={index}
              >
                <ListElement text={option} count={10} key={index} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

Dropdown.propTypes = {
  /**
   * label to be displayed.
   */
  label: PropTypes.string,
  /**
   * options/List to be displayed.
   */
  options: PropTypes.arrayOf(PropTypes.node),
  /**
   * children to be passed to the component.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Dropdown.defaultProps = {
  label: undefined,
  options: undefined,
  children: undefined,
};
