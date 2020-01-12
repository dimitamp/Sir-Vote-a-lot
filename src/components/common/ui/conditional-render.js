import propTypes from 'prop-types';

const Component = ({condition, children}) => (
    Array.isArray(children) 
        ? condition 
            ? children[0] 
            : children[1]
        : condition && children
);

export default Component;

Component.propTypes = {
    condition: propTypes.bool.isRequired,
    children: propTypes.node.isRequired
};
