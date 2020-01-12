import React, {useState} from 'react';
import propTypes from 'prop-types';
import {Alert} from '@blueprintjs/core';

export const Component = ({children, content, ...otherProps}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <React.Fragment>
        <Alert {...otherProps} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {content}
        </Alert>
        {children({setIsOpen})}
      </React.Fragment>
    );
};

Component.propTypes = {content: propTypes.node.isRequired, children: propTypes.func.isRequired};

export default Component;
