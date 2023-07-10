import {
    KEYWORD_SEARCH_LIST_TO_SPRING,
    KEYWORD_SEARCH_TO_SPRING
} from "./mutation-types";

  export default {
    [KEYWORD_SEARCH_LIST_TO_SPRING] (state, receivedData) {
        state.books = receivedData;
    },
    [KEYWORD_SEARCH_TO_SPRING] (state, receivedData) {
        state.book = receivedData;
    },
};