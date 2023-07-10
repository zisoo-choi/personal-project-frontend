import {
    KEYWORD_SEARCH_LIST_RESULT,
    KEYWORD_SEARCH_RESULT
} from "./mutation-types";

  export default {
    [KEYWORD_SEARCH_LIST_RESULT] (state, receivedData) {
        state.books = receivedData
    },
    [KEYWORD_SEARCH_RESULT] (state, receivedData) {
        state.book = receivedData
    },
};