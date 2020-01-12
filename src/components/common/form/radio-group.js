import React from 'react';
import propTypes from 'prop-types';
import {RadioGroup, Radio, } from '@blueprintjs/core';
import useWindowSize from '@rehooks/window-size';
import {getInputValueByName} from '../../../lib/utilities';
import {StyledInformation} from '../ui';


export const Component = ({
  formikProps: {handleChange, values},
  name,
  inline,
  options,
  label
}) => {
  const {innerWidth} = useWindowSize();
  const large = innerWidth > 600;
  return (
    <RadioGroup
      inline={inline}
      large={large}
      label={<StyledInformation>{label}</StyledInformation>}
      name={name}
      onChange={handleChange}
      selectedValue={getInputValueByName(values, name)}
    >
      {options.map( option => (
        <Radio
          key={option}
          label={<StyledInformation>{option}</StyledInformation>}
          value={option}
        />
      ))}
    </RadioGroup>
  );
};

Component.propTypes = {
  formikProps: propTypes.objectOf(propTypes.any).isRequired,
  name: propTypes.string.isRequired,
  inline: propTypes.bool,
  options: propTypes.arrayOf(propTypes.string).isRequired,
  label: propTypes.string.isRequired
};

Component.defaultProps = {inline: false};

export default Component;
