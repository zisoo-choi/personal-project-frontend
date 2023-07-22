import {
  REQUEST_USER_TOKEN_TO_SPRING,
  REQUEST_USER_INFO_TO_SPRING,
  REQUEST_IS_LOGIN_TO_SPRING
} from "./mutation-types";

export default {
  [REQUEST_USER_TOKEN_TO_SPRING](state, receivedData) {
    state.token = receivedData;
  },
  [REQUEST_USER_INFO_TO_SPRING](state,receivedData) {
    state.memberInfo = receivedData;
  },
  [REQUEST_IS_LOGIN_TO_SPRING](state,receivedData) {
    state.isLogin = receivedData;
  }
};