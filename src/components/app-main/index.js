import React from 'react';
import {path} from 'ramda';
import styled from 'styled-components';
import {layout} from 'styled-system';
import {Flex} from 'rebass';
import Poll from '../poll';
import Vote from '../vote';
import Chart from '../chart';

const AppMain = styled(Flex).attrs(() => ({
  height: ['calc( 100vh - 50px )', 'calc( 100vh - 100px )'],
  flexWrap: 'wrap '
 }))`
  display: flex;
  flex: 1;
  background-color: ${path(['theme', 'colors', 'secondary'])};
  ${layout}
`;

export const Component = () => (
  <AppMain>
    <Poll />
    <Vote />
    <Chart />
  </AppMain>
   
);

export default Component;
