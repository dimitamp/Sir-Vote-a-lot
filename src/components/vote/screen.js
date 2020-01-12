import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {path} from 'ramda';
import {Formik} from 'formik';
import {Box, Flex} from 'rebass';
import {
  StyledSection,
  StyledButton,
  StyledForm,
  ToasterBottom as Toaster,
  ConditionalRender
} from '../common/ui';
import {RadioGroup} from '../common/form';
import {handleSubmit} from './form-handler';
import actions from '../../actions';
import {disableSubmitOnReturn} from '../../lib/utilities';


const SubmitButton = styled(StyledButton)`
  margin-left: auto;
`;


const Component = ({
 vote,
 question,
 answers
}) => (
  <StyledSection flexDirection="column" justifyContent="flex-start">
    <ConditionalRender condition={question.length > 0}>
      <Formik
        initialValues={{vote: null}}
        onSubmit={(...formikArgs) =>
          handleSubmit(...formikArgs, {
            action: vote,
            onSuccess: () => {
              Toaster.show({
                message: 'Your vote has been registered',
                intent: 'success',
                icon: 'tick',
              });
            }
          })
        }
      >
        {formikProps => (
          <StyledForm
            onSubmit={formikProps.handleSubmit}
            onKeyDown={disableSubmitOnReturn}
          >
            <Box minHeight="90%">
              <RadioGroup
                formikProps={{...formikProps}}
                name="vote"
                label={question}
                options={answers}
              />
            </Box>
            <Flex minHeight="10%" flex={1} alignItems="center" flexWrap="wrap">
              <SubmitButton
                appearance="primary"
                type="submit"
                disabled={formikProps.isSubmitting}
                loading={formikProps.isSubmitting}
                intent="primary"
              >
                 Vote
              </SubmitButton>
            </Flex>
          </StyledForm>
        )}
      </Formik>
    </ConditionalRender>
  </StyledSection>
  ); 

const mapState = state => ({
 answers: path(['poll', 'answers'], state),
 question: path(['poll', 'question'], state)
});

const mapDispatch = dispatch => ({
  vote: data => {
    dispatch(actions.poll.vote(data));
  },
});

export default connect(mapState, mapDispatch)(Component);

Component.propTypes = {
  answers: propTypes.arrayOf(propTypes.string).isRequired,
  vote: propTypes.func.isRequired,
  question: propTypes.string.isRequired
};
