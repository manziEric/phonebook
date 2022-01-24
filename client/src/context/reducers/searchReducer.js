import {
  EDIT_ENTRY_RESULT,
  GET_SEARCH_RESULT_FOR_TABLE,
  GET_SEARCH_RESULT_FROM_SERVER,
} from "../constants";

const searchReducer = (state, action) => {
  const { data, tableData, editEntryResult } = action.payload;
  switch (action.type) {
    case GET_SEARCH_RESULT_FROM_SERVER:
      return { ...state, data };
    case GET_SEARCH_RESULT_FOR_TABLE:
      let displayTable = true;
      if (tableData?.length === 0) {
        displayTable = false;
      }
      return { ...state, tableData, displayTable };
    case EDIT_ENTRY_RESULT:
      return { ...state, editEntryResult };
    default:
      return state;
  }
};

export default searchReducer;
