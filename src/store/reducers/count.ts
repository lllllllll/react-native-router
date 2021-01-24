import types from '../types';

const initialState = {
  counter: 0,
};

export const counter = (state = initialState, { type, counter = 0 }: { type: string, counter: number}) => {
  switch (type) {
    case types.COUNT:
      return { ...state, counter }
    default:
      return state
  }
}