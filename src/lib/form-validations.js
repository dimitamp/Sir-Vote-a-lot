import * as Yup from 'yup';

const MAX_INPUT_LENGTH = 80;

export const question = Yup
 .string()
 .trim()
 .max(MAX_INPUT_LENGTH, 'question must be less than 80 characters')
 .required('question is a required field')
;

export const answer = Yup
 .string()
 .trim()
 .max(MAX_INPUT_LENGTH, 'answer must be less than 80 characters')
 .required('answer is a required field')
;

export const answers = Yup
 .array()
 .of(answer)
;
