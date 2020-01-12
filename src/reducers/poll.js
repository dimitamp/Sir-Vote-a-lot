import {T, cond} from 'ramda';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {reducer} from '../lib/redux-helpers';

const storageKey = 'votealot';

export const initialState = {question: '', answers: [], votes: []};

const create = reducer(
  'POLL.CREATE',
  (state, {payload: {question, answers}}) => ({
      ...state,
      question,
      answers,
      votes: answers.map(() => 0)
  }));

const update = reducer(
  'POLL.UPDATE',
  (state, {payload: {question, answers}}) => {
    const votes = answers.map( answer => {
      if(state.answers.includes(answer)){
         return state.votes[state.answers.indexOf(answer)];
      } 
        return 0;
    });
    return {
      ...state,
      question,
      answers,
      votes
    };
  }
);

const vote = reducer('POLL.VOTE', (state, {payload: {vote: answer}}) => {
  const updatedVotes = [...state.votes];
  updatedVotes[state.answers.indexOf(answer)] += 1;
  return ({
    ...state,
    votes: updatedVotes
  });
});

const reset = reducer('POLL.RESET', () => ({...initialState}));

const defaultCase = [T, state => state || initialState];

const persistedReducer = persistReducer(
  {key: storageKey, storage},
  cond([create, reset, update, vote, defaultCase])
);

export default persistedReducer;
