import {
  REQUEST_HOOP_BOOK_LIST_TO_SPRING,
  REQUEST_HOOP_BOOK_TO_SPRING,
  REQUEST_RENT_BOOK_LIST_TO_SPRING,
  REQUEST_RENT_BOOK_TO_SPRING
} from "./mutation-types";

export default {
  [REQUEST_HOOP_BOOK_LIST_TO_SPRING](state, receivedData) {
    state.books = receivedData;
  },
  [REQUEST_HOOP_BOOK_TO_SPRING](state,receivedData) {
    state.book = receivedData;
  },
  [REQUEST_RENT_BOOK_LIST_TO_SPRING](state,receivedData) {
    state.rentalBooks = receivedData;
  },
  [REQUEST_RENT_BOOK_TO_SPRING](state,receivedData) {
    state.rentalBook = receivedData;
  }
};