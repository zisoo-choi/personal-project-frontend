import {
  REQUEST_HOOP_BOOK_LIST_TO_SPRING,
  REQUEST_HOOP_BOOK_TO_SPRING,
  REQUEST_RENT_BOOK_LIST_TO_SPRING,
  REQUEST_RESERVATION_LIST_TO_SPRING,
  REQUEST_PERSONAL_RENTAL_AMOUNT_TO_SPRING,
  REQUEST_PERSONAL_RESERVATION_AMOUNT_TO_SPRING,
  REQUEST_PERSONAL_HOPE_AMOUNT_TO_SPRING,
  REQUEST_MANAGEMENT_RENTAL_AMOUNT_TO_SPRING,
  REQUEST_MANAGEMENT_RESERVATION_AMOUNT_TO_SPRING,
  REQUEST_MANAGEMENT_HOPE_AMOUNT_TO_SPRING
} from "./mutation-types";

export default {
  [REQUEST_HOOP_BOOK_LIST_TO_SPRING](state, receivedData) {
    state.hopeBooks = receivedData;
  },
  [REQUEST_HOOP_BOOK_TO_SPRING](state,receivedData) {
    state.hopeBook = receivedData;
  },
  [REQUEST_RENT_BOOK_LIST_TO_SPRING](state,receivedData) {
    state.rentalBooks = receivedData;
  },
  [REQUEST_RESERVATION_LIST_TO_SPRING](state,receivedData) {
    state.reservationBooks = receivedData;
  },
  [REQUEST_PERSONAL_RENTAL_AMOUNT_TO_SPRING](state, receivedData) {
    state.personalRentalAmount = receivedData;
  },
  [REQUEST_PERSONAL_RESERVATION_AMOUNT_TO_SPRING](state, receivedData) {
    state.personalReservationAmount = receivedData;
  },
  [REQUEST_PERSONAL_HOPE_AMOUNT_TO_SPRING](state, receivedData) {
    state.personalhopeAmount = receivedData;
  },
  [REQUEST_MANAGEMENT_RENTAL_AMOUNT_TO_SPRING](state, receivedData) {
    state.managerRentalAmount = receivedData;
  },
  [REQUEST_MANAGEMENT_RESERVATION_AMOUNT_TO_SPRING](state, receivedData) {
    state.managerReservationAmount = receivedData;
  },
  [REQUEST_MANAGEMENT_HOPE_AMOUNT_TO_SPRING](state, receivedData) {
    state.managerhopeAmount = receivedData;
  }
};