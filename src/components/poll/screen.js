import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {path} from 'ramda';
import {Formik, FieldArray} from 'formik';
import {Flex, Box} from 'rebass';
import {
  StyledSection,
  StyledButton,
  StyledForm,
  ToasterBottom as Toaster,
  ConditionalRender,
  StyledInformation,
  AlertContent
} from '../common/ui';
import {Alert} from '../common/hoc';
import {TextInput} from '../common/form';
import {validationSchema, handleSubmit} from './form-handler';
import actions from '../../actions';
import {disableSubmitOnReturn} from '../../lib/utilities';

const SubmitButton = styled(StyledButton)`
  margin-left: auto;
`;

const ResetButton = styled(SubmitButton)``;

const Answer = ({btnHandler, btnText, name, formikProps}) => {
  return (
    <Flex>
      <Flex flex={0.8}>
        <TextInput
          name={name}
          type="text"
          fill
          contentFlex={0.9}
          placeholder="Type an answer"
          formikProps={{...formikProps}}
        />
      </Flex>
      <Flex flex={0.2} justifyContent="flex-end">
        <StyledButton onClick={btnHandler}>{btnText}</StyledButton>
      </Flex>
    </Flex>
  );
};

const Component = ({create, update, reset, question, answers}) => {
  const isNew = question.length === 0;
  return (
    <StyledSection flexDirection="column" justifyContent="flex-start">
      <Formik
        initialValues={{question, answers, answer: ''}}
        validationSchema={validationSchema}
        onSubmit={(...formikArgs) =>
          handleSubmit(...formikArgs, {
            action: isNew ? create : update,
            onSuccess: () => {
              Toaster.show({
                message: isNew
                  ? 'Poll has been created'
                  : 'Poll has been updated',
                intent: 'success',
                icon: 'tick'
              });
            }
          })
        }
      >
        {formikProps => (
          <Alert
            intent="danger"
            className="back-nav"
            content={
              <AlertContent message="Are you sure you want to reset the poll?" />
            }
            onConfirm={() => {
              formikProps.handleReset();
              reset();
            }}
            cancelButtonText="No"
            confirmButtonText="Yes"
          >
            {({setIsOpen}) => (
              <StyledForm
                onSubmit={formikProps.handleSubmit}
                onKeyDown={disableSubmitOnReturn}
              >
                <Box minHeight="90%">
                  <TextInput
                    name="question"
                    placeholder="Type a question"
                    formikProps={{...formikProps}}
                  />
                  <FieldArray
                    name="answers"
                    render={({push, remove}) => (
                      <React.Fragment>
                        {path(['values', 'answers'], formikProps).map(
                          (_, index) => (
                            <Answer
                              key={index}
                              name={`answers.${index}`}
                              formikProps={formikProps}
                              btnHandler={() => remove(index)}
                              btnText="X"
                            />
                          )
                        )}
                        <ConditionalRender
                          condition={
                            path(['values', 'answers'], formikProps).length < 10
                          }
                        >
                          <Answer
                            name="answer"
                            formikProps={formikProps}
                            btnHandler={() => {
                              push(path(['values', 'answer'], formikProps));
                              formikProps.handleChange({target: {name: 'answer', value: ''}});
                              formikProps.touched.answer = false;
                            }}
                            btnText="ADD"
                          />
                        </ConditionalRender>
                      </React.Fragment>
                    )}
                  />
                </Box>
                <Flex
                  minHeight="10%"
                  flex={1}
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <StyledInformation>
                    {`${
                      path(['values', 'answers'], formikProps).length
                    }/10 possible answers`}
                  </StyledInformation>
                  <ConditionalRender condition={!isNew}>
                    <ResetButton
                      appearance="primary"
                      type="reset"
                      onClick={() => setIsOpen(true)}
                      intent="primary"
                    >
                      Reset
                    </ResetButton>
                  </ConditionalRender>
                  <SubmitButton
                    appearance="primary"
                    type="submit"
                    disabled={formikProps.isSubmitting}
                    loading={formikProps.isSubmitting}
                    intent="primary"
                  >
                    {isNew ? 'Create' : 'Update'}
                  </SubmitButton>
                </Flex>
              </StyledForm>
            )}
          </Alert>
        )}
      </Formik>
    </StyledSection>
  );
};

const mapState = state => ({
  question: path(['poll', 'question'], state),
  answers: path(['poll', 'answers'], state)
});

const mapDispatch = dispatch => ({
  create: data => {
    dispatch(actions.poll.create(data));
  },
  update: data => {
    dispatch(actions.poll.update(data));
  },
  reset: () => {
    dispatch(actions.poll.reset());
  }
});

export default connect(mapState, mapDispatch)(Component);

Component.propTypes = {
  question: propTypes.string.isRequired,
  answers: propTypes.arrayOf(propTypes.string).isRequired,
  create: propTypes.func.isRequired,
  update: propTypes.func.isRequired,
  reset: propTypes.func.isRequired
};

Answer.propTypes = {
  btnHandler: propTypes.func.isRequired,
  btnText: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  formikProps: propTypes.objectOf(propTypes.any).isRequired
};
