import React from 'react';
import * as Sentry from '@sentry/browser';
import {Flex} from 'rebass';
import styled from 'styled-components';
import {fontSize} from 'styled-system';

const ErrorContainer = styled(Flex).attrs(() => ({
 flex: 1,
 height: '100vh',
 alignItems: 'center',
 justifyContent: 'center'
}))``;

const ErrorText = styled.p.attrs(() => ({fontSize: [2, 4]}))`
 font-weight: 700;
 ${fontSize};
`;

export const Component = () => (
  <ErrorContainer>
    <ErrorText onClick={() => Sentry.showReportDialog()}>
      Something went wrong...
    </ErrorText>
  </ErrorContainer>
);

export default Component
;
