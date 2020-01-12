import {Flex} from 'rebass';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {space, layout} from 'styled-system';
import {path} from 'ramda';

const Component = styled(Flex).attrs( (props) => ({
  padding: [3],
  width: [1, 1, 1 / 3],
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexDirection: props.flexDirection,

  }))`
  height: 100%;
  overflow-y: auto;
  border: solid 10px ${path(['theme', 'colors', 'primary'])};
  ${space};
  ${layout};
`;


Component.propTypes = {
  justifyContent: propTypes.string,
  alignItems: propTypes.string,
  flexDirection: propTypes.string
};

Component.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
};

export default Component;
