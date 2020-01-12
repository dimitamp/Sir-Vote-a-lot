import React from 'react';
import propTypes from 'prop-types';
import {InputGroup, FormGroup} from '@blueprintjs/core';
import useWindowSize from '@rehooks/window-size';
import {concat} from 'ramda';
import {
getFormErrorsField, getInputValueByName, flexClassName
} from '../../../lib/utilities';


export const Component = ({
  formikProps: {errors, touched, handleChange, handleBlur, values},
  name,
  leftIcon,
  placeholder,
  intent,
  fill,
  type,
  inline,
  disabled,
  className,
  contentFlex
}) => {
  const {innerWidth} = useWindowSize();
  const large = innerWidth > 600;
  return (
    <FormGroup
      inline={inline}
      intent={getFormErrorsField(name, errors, touched) ? 'danger' : intent}
      helperText={getFormErrorsField(name, errors, touched)}
      className={concat(
        className,
        contentFlex ? ` ${flexClassName(contentFlex)}` : ''
      )}
    >
      <InputGroup
        large={large}
        type={type}
        name={name}
        leftIcon={leftIcon}
        placeholder={placeholder}
        intent={getFormErrorsField(name, errors, touched) ? 'danger' : intent}
        onChange={handleChange}
        onBlur={handleBlur}
        value={getInputValueByName(values, name)}
        fill={fill}
        disabled={disabled}
      />
    </FormGroup>
  );
};

Component.propTypes = {
  formikProps: propTypes.objectOf(propTypes.any).isRequired,
  name: propTypes.string.isRequired,
  leftIcon: propTypes.oneOfType([propTypes.string, propTypes.bool]),
  placeholder: propTypes.string,
  intent: propTypes.oneOf(['primary', 'success', 'warning', 'danger', 'none']),
  fill: propTypes.bool,
  type: propTypes.string,
  inline: propTypes.bool,
  disabled: propTypes.bool,
  className: propTypes.string,
  contentFlex: propTypes.number
};

Component.defaultProps = {
  placeholder: '',
  leftIcon: false,
  intent: 'none',
  fill: false,
  type: 'text',
  inline: false,
  disabled: false,
  className: '',
  contentFlex: null,
};

export default Component;
