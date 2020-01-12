import {isNil} from 'ramda';
import {ToasterBottom} from '../common/ui';

const checkVote = (vote) => {
    if(isNil(vote)){
        ToasterBottom.show({
            intent: 'danger',
            message: 'You must select an answer',
        });
        return false; 
    }
    return true;
};

export const handleSubmit = async (values, {setSubmitting}, {action, onSuccess}) => {
    try {
        if(checkVote(values.vote)){
        action(values);
        onSuccess();
        }
        setSubmitting(false);
    } catch (error) {}
    setSubmitting(false);
};
