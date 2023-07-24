import {
  REQUEST_USER_TOKEN_TO_SPRING,
  REQUEST_USER_INFO_TO_SPRING,
  REQUEST_MEMBER_LIST_TO_SPRING,
  REQUEST_MEMBER_TO_SPRING
} from "./mutation-types";

export default {
  [REQUEST_USER_TOKEN_TO_SPRING](state, receivedData) {
    state.token = receivedData;
  },
  [REQUEST_USER_INFO_TO_SPRING](state,receivedData) {
    state.memberInfo = receivedData;
  },
  [REQUEST_MEMBER_LIST_TO_SPRING](state,receivedData) {
    state.members = receivedData;
  },
  [REQUEST_MEMBER_TO_SPRING](state,receivedData) {
    state.member = receivedData;
  }
};