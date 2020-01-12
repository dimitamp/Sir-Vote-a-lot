import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {path} from 'ramda';
import {BarChart} from '../common/charts';
import {
StyledSection, ConditionalRender, StyledInformation
} from '../common/ui';


const Component = ({votes, question, answers}) => {
  const data = answers.map( (answer, index) => ({
    name: answer,
    value: votes[index]
  }));
  return(
    <StyledSection flexDirection="column" alignItems="flex-start" justifyContent="space-between">
      <ConditionalRender condition={question.length > 0}>
        <React.Fragment>
          <StyledInformation>{question}</StyledInformation>
          <BarChart data={data} />
          <StyledInformation>{`Total votes: ${votes.reduce((a, b) => a + b, 0)}`}</StyledInformation>
        </React.Fragment>
      </ConditionalRender>
    </StyledSection>
  );
}; 

const mapState = state => ({
  votes: path(['poll', 'votes'], state),
  question: path(['poll', 'question'], state),
  answers: path(['poll', 'answers'], state),
});

export default connect(mapState)(Component);

Component.propTypes = {
  votes: propTypes.arrayOf(propTypes.number).isRequired,
  answers: propTypes.arrayOf(propTypes.string).isRequired,
  question: propTypes.string.isRequired,
};
