import { Dispatch } from 'react';
import Types from "../types";

export const fetchCounter = (counter: number = 0) => {
  return (dispatch: Dispatch<any>) => {
    return dispatch({ type: Types.COUNT, counter });
  };
};
