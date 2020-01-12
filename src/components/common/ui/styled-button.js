import styled from 'styled-components';
import {Button} from '@blueprintjs/core';
import {path} from 'ramda';
import {fontSize, layout} from 'styled-system';
import propTypes from 'prop-types';

const Component = styled(Button).attrs((props) => ({fontSize: props.fontSize, height: props.height}))`
  background-image: none!important;
  color: ${props => path(['theme', 'buttons', props.appearance, 'color'])};
  background-color: ${props => path(['theme', 'buttons', props.appearance, 'backgroundColor'])};
  opacity: ${props => props.disabled ? 0.7 : 1};
  border:  ${props => path(['theme', 'buttons', props.appearance, 'border'])};
  ${fontSize};
  font-weight: 700;
  ${layout};
`;

Component.propTypes = {
  appearance: propTypes.string,
  disabled: propTypes.bool,
  fontSize: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.number,
      propTypes.string
  ])),
  height: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.number,
      propTypes.string
  ]))
};

Component.defaultProps = {
  appearance: 'primary',
  fontSize: [2, 4],
  disabled: false,
  height: ['30px', '40px']
};

export default Component;
