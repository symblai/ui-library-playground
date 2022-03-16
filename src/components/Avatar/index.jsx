/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import style from './style.module.css';

/**
 * Avatar component.
 */

export default function Avatar({
  src,
  text,
  contained,
  textColor,
  backgroundColor,
  size,
  alt,
  ...rest
}) {
  let tempText = text;

  if (tempText === undefined && src === undefined) {
    /**
     * Rendering nothing, if no text or src is provided.
     */
    return null;
  }

  /**
   * if tempText = "United States"
   * then, displayed tempText= "US"
   */
  if (tempText !== undefined && tempText.split(' ').length > 1) {
    const splittedText = tempText.split(' ');
    tempText = splittedText[0][0] + splittedText[splittedText.length - 1][0];
  }

  /**
   * if tempText="ABCDE"
   * then, displayed tempText = "AB"
   */
  if (tempText !== undefined && tempText.length > 2) {
    tempText = tempText[0] + tempText[1];
  }

  return tempText ? (
    <span
      className={cx(style['avatar-text'], { [style.border]: contained })}
      style={{
        color: textColor,
        backgroundColor,
        width: size,
        height: size,
        fontSize: `calc(0.375*${size})`,
      }}
      {...rest}
    >
      {tempText.toUpperCase()}
    </span>
  ) : (
    <img
      className={cx(style['avatar-img'], { [style.border]: contained })}
      src={src}
      style={{
        width: size,
        height: size,
      }}
      alt={alt || ''}
      {...rest}
    />
  );
}

Avatar.propTypes = {
  /**
   * source of the image/icon
   */
  src: PropTypes.string,
  /**
   * for avatar with Initials.
   */
  text: PropTypes.string,
  /**
   * defines if it's have border or not.
   */
  contained: PropTypes.bool,
  /**
   * color of text.
   */
  textColor: PropTypes.string,
  /**
   * background color for avatar with text.
   */
  backgroundColor: PropTypes.string,
  /**
   * alt of the image/icon.
   */
  alt: PropTypes.string,
  /**
   * defines the size of the Avatar.
   */
  size: PropTypes.string,
};

Avatar.defaultProps = {
  contained: true,
  size: '2.5rem',
  src: undefined,
  text: undefined,
  textColor: undefined,
  backgroundColor: undefined,
  alt: '.',
};
