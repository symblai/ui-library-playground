/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';
import Chip from '../Chip';

export default function HeaderTile({
  title,
  backgroundImg,
  speakers,
  ...rest
}) {
  return (
    <div
      className={style['header-tile-layout']}
      {...rest}
      style={
        backgroundImg !== undefined && backgroundImg !== ''
          ? {
            backgroundImage: `url(${backgroundImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }
          : {
            backgroundColor: 'black',
          }
      }
    >
      {/* layout */}
      <div className={style['header-and-data-container']}>
        {/* container */}
        <div className={style['tile-title']}>
          {/* title */}
          {title !== undefined && title}
        </div>

        <div className={style['speakers-container']}>
          {/* speakers/body/children */}
          {speakers !== undefined && speakers !== null && (
            <span> SPEAKERS</span>
          )}
          {speakers !== undefined
            && speakers !== null
            && speakers.map((speaker, index) => (
              <Chip
                imgSrc={
                  speaker.profilePic
                    ? speaker.profilePic
                    : 'https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png'
                }
                text={speaker.name}
                type="profile"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                style={{
                  background: 'rgba(28, 40, 51, 0.48)',
                  border: '1px solid rgba(255, 255, 255, 0.24)',
                  color: 'white',
                  margin: '0 4px',
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

HeaderTile.propTypes = {
  /**
   * title to be displayed.
   */
  title: PropTypes.string,
  /**
   * background image to be displayed.
   */
  backgroundImg: PropTypes.string,
  /**
   * speakers in the conversation.
   */
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      profilePic: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

HeaderTile.defaultProps = {
  title: '🚀 Weekly Catchup Meet ! ',
  backgroundImg: undefined,
  speakers: undefined,
};
