import {fontSize} from 'styled-system';
import styled from 'styled-components';
import {Text} from '@blueprintjs/core';

const Component = styled(Text).attrs(() => ({fontSize: [2, 3, 4]}))`
  ${fontSize}
  display: inline-block;
  margin-bottom: 10px;
`;

export default Component;
