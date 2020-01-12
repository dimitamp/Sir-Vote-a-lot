import React from 'react';
import styled from 'styled-components';
import {Classes} from '@blueprintjs/core';
import propTypes from 'prop-types';


const AlertBody = styled.div.attrs( () => ({className: Classes.DIALOG_BODY}))``;

const AlertMessage = styled.p``;

export const Component = ({message}) => (
  (
    <AlertBody>
      <AlertMessage>{message}</AlertMessage>
    </AlertBody>
  )
);


export default Component;

Component.propTypes = {message: propTypes.string.isRequired};
