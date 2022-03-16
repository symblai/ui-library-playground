/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import XCircle from '../../assets/XCircle.svg';

export default function Chip({
  text,
  type,
  emoji,
  imgSrc,
  disabled,
  number,
  isSelectable,
  ...rest
}) {
  /**
   * preserving the selected/not-selected state of the chip.
   */
  const [selected, setSelected] = useState(false);

  if (type === 'number') {
    // eslint-disable-next-line no-param-reassign
    isSelectable = false;
  }

  const onClick = () => isSelectable && setSelected(!selected);

  return (
    <button
      type="button"
      className={
        !selected ? style['chip-layout'] : style['selected-chip-layout']
      }
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {!selected && type === 'profile' && <img src={imgSrc} alt="" />}
      {!selected && type === 'emoji' && (
        <span className={style.emoji}>{emoji}</span>
      )}
      {selected && type !== 'basic' && <img src={XCircle} alt="" />}
      {!selected && text !== undefined && type === 'initial' && (
        <span className={style.initials}>{text[0].toUpperCase()}</span>
      )}
      {type === 'number' && <span className={style.number}>{number}</span>}
      <span
        className={style['chip-text']}
        // style={type === 'basic' ? { padding: '2px 12px' } : {}}
      >
        {type === 'basic' && '#'}
        {text}
      </span>
    </button>
  );
}

Chip.propTypes = {
  /**
   * text to be displayed.
   */
  text: PropTypes.string,
  /**
   * type of the chip.
   */
  type: PropTypes.oneOf(['profile', 'emoji', 'basic', 'number', 'initial']),
  /**
   * Number to be displayed.
   */
  number: PropTypes.number,
  /**
   * Emoji to be displayed.
   */
  emoji: PropTypes.string,
  /**
   * Image to be displayed.
   */
  imgSrc: PropTypes.string,
  /**
   * Disabled state of the chip.
   */
  disabled: PropTypes.bool,
  /**
   * Selectable state of the chip.
   */
  isSelectable: PropTypes.bool,
};

Chip.defaultProps = {
  text: 'Text Here',
  type: 'emoji',
  emoji: '📌',
  imgSrc:
    'https://s3-alpha-sig.figma.com/img/0b89/9e1a/fa06a93c37c24e48412a1707e7cb730e?Expires=1647820800&Signature=QWtP10C8AywNgSGafQxMOz8ZHC~uSUdNdVdWZ-RfhGPtYPBghLcEIyTb1YsNdYDX~J7uE1XDZuO~YRzMcdcvQWLht9oyjqv30exRWUhfvlGiYKhdU-8UkVRjlJavy4LqKbB6Bjy8ErCjmC9iBgg1gZOYJ7-qUhPa5VHf0wPuhFyvcKHMlVb6N6gmELFtF08Ue42ia01ILe9bDJWkeB~fBDB1faT6HvU2u0ykHLKU7iJqxRqVpv8ioIMpXh9Gn4UoP3-CREciq4EWTFluNmAGYbpZjUh7ukJaE8lNkbsepENtu86d7-dZzjlheySVKKeDeLTk5Y9ppxlqe6eVMawOVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  number: 0,
  disabled: false,
  isSelectable: false,
};
