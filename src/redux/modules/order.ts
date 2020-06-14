import api from "../../utils/api";
import { Dispatch } from "react";

const LOADING = "ORDERS/LOADING";
const LOAD_SUCCESS = "ORDERS/LOAD_SUCCESS";
const LOAD_FAIL = "ORDERS/LOAD_FAIL";

const initialState = {
  loaded: false,
  data: [],
};

export default function reducer(
  state = initialState,
  action: { type: any; result: any; error: any; id: any }
) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: [],
        error: action.error,
      };
    default:
      return state;
  }
}

export const getOrders = () => async (dispatch: Dispatch<{}>) => {
  try {
    dispatch({ type: LOADING });

    const response = await api.get("orders");

    dispatch({
      type: LOAD_SUCCESS,
      result: response.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_FAIL,
      error,
    });
  }
};
