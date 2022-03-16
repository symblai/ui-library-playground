/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DotsThreeOutline from '../../assets/DotsThreeOutline.svg';
import Chip from '../Chip';
import style from './style.module.css';
import Trello from '../../assets/Trello.svg';

export default function InsightsCard({
  chipText,
  timeStamp,
  onOptionsClick,
  insightsDescription,
  footerElement,
  disabled,
  ...rest
}) {
  /**
   * function to return the footer according to the case.
   * @returns {Node}
   */
  const renderFooterNote = () => {
    let footerNote = (
      <div className={style.footerNote}>
        <div>
          <img src={Trello} alt="" />
        </div>
        <div>shared on Trello</div>
      </div>
    );

    if (footerElement) {
      footerNote = <div className={style.footerNote}>{footerElement}</div>;
    }

    return (
      <>
        <div>
          <hr style={{ backgroundColor: '#E1E6EB' }} />
        </div>
        {footerNote}
      </>
    );
  };

  /**
   * CardHeader
   */
  const cardHeader = (
    <div className={style.cardHeader}>
      <div className={style.chipAndTimeStampContainer}>
        <Chip type="basic" text={chipText} />
        <span className={style.timeStamp}>{timeStamp}</span>
      </div>
      <div>
        <button
          type="button"
          onClick={onOptionsClick}
          style={{
            padding: '0',
            border: '0',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          <img type="button" src={DotsThreeOutline} alt="..." />
        </button>
      </div>
    </div>
  );

  /**
   * cardBody
   */
  const cardBody = <div className={style.cardBody}>{insightsDescription}</div>;

  /**
   * Combining & returning.
   */
  return (
    <div
      className={cx(style.InsightsCard, {
        [style.insightsCardDisabled]: disabled,
      })}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      tabIndex="0"
      disabled={disabled}
      aria-disabled={disabled}
    >
      {cardHeader}
      {cardBody}
      {renderFooterNote()}
    </div>
  );
}

InsightsCard.propTypes = {
  /**
   * timeStamp to be displayed in the card.
   */
  timeStamp: PropTypes.string,
  /**
   * Behavior of the options button on onClick.
   */
  onOptionsClick: PropTypes.func,
  /**
   * The description of the insights card.
   */
  insightsDescription: PropTypes.string,
  /**
   *  footerElement to be displayed in the card.
   */
  footerElement: PropTypes.node,
  /**
   * The chip text of the insights card.
   */
  chipText: PropTypes.string,
  /**
   * is the card disabled.
   */
  disabled: PropTypes.bool,
};

InsightsCard.defaultProps = {
  onOptionsClick: () => {},
  insightsDescription: 'This is a paragraph for describing the insight...',
  timeStamp: '0:00',
  footerElement: undefined,
  chipText: 'chipText',
  disabled: false,
};
