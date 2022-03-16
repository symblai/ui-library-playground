/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './style.module.css';
import DotsThreeOutline from '../../assets/DotsThreeOutline.svg';

export default function TrackerCard({
  id,
  selected,
  trackerName,
  description,
  chipText,
  disabled,
  ...rest
}) {
  const customChip = <div className={style.customChip}>{chipText}</div>;

  const Header = (
    <div className={style.header}>
      <div className={style.iconOrSelectContainer}>
        {/* select /Symbol */}
        <span>✍</span>
        <input type="checkbox" checked={selected} readOnly />
      </div>
      <div className={style.optionAndChipContainer}>
        {/* chip&option-container */}
        {customChip}
        <div className={style.option}>
          <img src={DotsThreeOutline} alt="" />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={cx(style.trackerCard, {
        [style.trackerCardDisabled]: disabled,
        [style.trackerCardNotSelected]: !selected,
        [style.trackerCardSelected]: selected,
      })}
      {...rest}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex="0"
    >
      {/* Header */}
      {Header}
      {/* Tracker-Name */}
      <span className={style.trackerName}>{trackerName}</span>
      {/* separator */}
      <hr className={style.separator} />
      {/* ID */}
      {id && (
      <span className={style.id}>
        ID
        {' '}
        {id}
      </span>
      )}
      {/* body or description */}
      <span className={style.description}>{description}</span>
    </div>
  );
}

TrackerCard.propTypes = {
  /**
   *  Is card selected ?
   */
  selected: PropTypes.bool,
  /**
   * The id of the tracker card.
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The name of the tracker card.
   */
  trackerName: PropTypes.string,
  /**
   * The description of the tracker card.
   */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * The chip text of the tracker card.
   */
  chipText: PropTypes.string,
  /**
   * Is card disabled ?
   */
  disabled: PropTypes.bool,
};

TrackerCard.defaultProps = {
  selected: false,
  id: undefined,
  trackerName: 'Tracker Name',
  description:
    "This is a description. This is another line that's a little longer than the one above and max has four lines in p...",
  chipText: 'chipText',
  disabled: false,
};
