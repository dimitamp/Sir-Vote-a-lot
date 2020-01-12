import React from 'react';
import {Text} from '@blueprintjs/core';
import styled from 'styled-components';
import {path} from 'ramda';
import {
fontSize, layout, space
} from 'styled-system';
import {Flex} from 'rebass';

const Header = styled(Flex).attrs(() => ({
  height: [50, 100],
  flex: 1,
  alignItems: 'center'
  }))`
  background-color: ${path(['theme', 'colors', 'primary'])};
  ${layout};
`;

const BrandIcon = styled.img.attrs({
  src: require('../../../assets/poll.png'),
  alt: 'poll icon',
  height: ['30px', '60px'],
  ml: [3, 5]
  })`
  object-fit: cover;
  ${layout};
  ${space}
`;

const AppName = styled(Text).attrs(() => ({fontSize: [3, 7], ml: [1, 2]}))`
  color: ${path(['theme', 'colors', 'secondary'])};
  ${fontSize};
  ${space};
  font-weight: 1000;
`;

const Component = () => {
  return (
    <Header>
      <BrandIcon />
      <AppName>
       | Sir Vot-a-lot
      </AppName>
    </Header>
  );
};


export default Component
;
