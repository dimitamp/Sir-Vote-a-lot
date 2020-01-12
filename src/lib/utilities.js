import {path} from 'ramda';

export const getFormErrorsField = (field, errors, touched) => {
 const p = [...field.split('.')];
 return path(p, errors) && path(p, touched) && path(p, errors);
};

export const disableSubmitOnReturn = keyEvent => {
 if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
   keyEvent.preventDefault();
 }
};

export const getInputValueByName = (values, name) =>
 path([...name.split('.')], values);

export const flexClassName = flex => `flex-${String(flex).replace('.', '_')}`;
