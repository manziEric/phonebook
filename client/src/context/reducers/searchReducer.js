import {
  GET_SEARCH_RESULT_FOR_TABLE,
  GET_SEARCH_RESULT_FROM_SERVER,
} from "../constants";

const searchReducer = (state, action) => {
  const { data, tableData } = action.payload;
  switch (action.type) {
    case GET_SEARCH_RESULT_FROM_SERVER:
      return { ...state, data };
    case GET_SEARCH_RESULT_FOR_TABLE:
      return { ...state, tableData, displayTable: true };

    default:
      return state;
  }
};

export default searchReducer;
