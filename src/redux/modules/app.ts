import esES from "antd/es/locale/es_ES";
import { Dispatch } from "react";

const initialState = {
  locale: esES,
};

// types
const CHANGE_LOCALE = "CHANGE_LOCALE";

// reducer
export default function reducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.payload };
    default:
      return state;
  }
}

// actions
export const changeLocaleAction = (localeValue: any) => async (
  dispatch: Dispatch<{}>
) => {
  dispatch({
    type: CHANGE_LOCALE,
    payload: localeValue,
  });
};
