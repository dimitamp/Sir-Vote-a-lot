import * as Yup from 'yup';
import {question, answers} from '../../lib/form-validations';
import {ToasterBottom} from '../common/ui';

export const validationSchema = Yup.object(({question, answers}));;

const checkLength = (ans) => {
    if(ans.length < 2){
        ToasterBottom.show({
            intent: 'danger',
            message: 'You must provide at least two answers',
        });
        return false; 
    }
    return true;
};

const checkDups = (ans) => {
    if([...new Set(ans)].length !== ans.length){
        ToasterBottom.show({
            intent: 'danger',
            message: 'You must provide different answers',
        });
        return false; 
    }
  return true;
};

export const handleSubmit = async (values, {setSubmitting}, {action, onSuccess}) => {
    try {
        const properValues = validationSchema.cast(values);
        if(checkLength(properValues.answers) && checkDups(properValues.answers)){
        action(properValues);
        onSuccess();
        }
        setSubmitting(false);
    } catch (error) {}
    setSubmitting(false);
};
