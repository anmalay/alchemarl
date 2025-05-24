// Action Type
export const FETCH_TOKEN_LIST_REQUEST = "FETCH_TOKEN_LIST_REQUEST";
export const FETCH_TOKEN_LIST_SUCCESS = "FETCH_TOKEN_LIST_SUCCESS";
export const FETCH_TOKEN_LIST_FAIL = "FETCH_TOKEN_LIST_FAIL";
export const SELECT_TOKEN = "SELECT_TOKEN";
export const CLEAR_SELECTED_TOKEN = "CLEAR_SELECTED_TOKEN";

// Action Creators
export const fetchTokenListRequest = () => ({
  type: FETCH_TOKEN_LIST_REQUEST,
});

export const fetchTokenListSuccess = (data) => ({
  type: FETCH_TOKEN_LIST_SUCCESS,
  payload: data,
});

export const fetchTokenListFail = (error) => ({
  type: FETCH_TOKEN_LIST_FAIL,
  payload: error,
});

export const selectToken = (token) => {
  console.log("Token selected:", token);
  return {
    type: SELECT_TOKEN,
    payload: token,
  };
};

export const clearSelectedToken = () => ({
  type: CLEAR_SELECTED_TOKEN,
});
