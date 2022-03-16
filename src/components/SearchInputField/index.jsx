/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import style from './style.module.css';
import checkCircle from '../../assets/CheckCircle.svg';
import Warning from '../../assets/Warning.svg';

export default function SearchInputField({
  label, description, placeHolder, helperText, isError, disabled, onChange, ...rest
}) {
  return (
    <form {...rest}>

      <div className={style['label-n-description-div']}>
        {label && <label htmlFor="searchInputField" className={style['searchField-label']}>{label}</label>}
        {description && <label htmlFor="searchInputField" className={style['searchField-description']}>{description}</label>}
      </div>

      <div className={cx(style.search, style[`searchField-isError-${isError}`])}>
        <input id="searchInputField" type="text" placeholder={placeHolder} onChange={onChange} disabled={disabled} />

        {isError && <img src={Warning} alt="" />}
        {isError === false && <img src={checkCircle} alt="" />}
      </div>

      {helperText && <span className={cx({ [style['searchField-helper-text-on-error']]: isError }, { [style['searchField-helper-text-on-correct']]: !isError })}>{helperText}</span>}
    </form>
  );
}

SearchInputField.propTypes = {
  /**
       * label for the input field.
       */
  label: PropTypes.string,
  /**
       * description, if any.
       */
  description: PropTypes.string,
  /**
       * place holder for the input field.
       */
  placeHolder: PropTypes.string,
  /**
       * it can be an error or a success message.
       */
  helperText: PropTypes.string,
  /**
       * The search results error state.
       */
  isError: PropTypes.bool,
  /**
       * onchange event handler.
       */
  onChange: PropTypes.func,
  /**
       * disabled state of the input field.
       */
  disabled: PropTypes.bool,
};

SearchInputField.defaultProps = {
  placeHolder: 'Search here by topics or by keywords',
  disabled: false,
  label: undefined,
  description: undefined,
  helperText: undefined,
  isError: undefined,
  onChange: () => {},
};

/**
 * !TODO:
 * have a section with the specific className
 * capture that Div -> fetch the content.
 * Search & highlight.
 *
 */
