import {
    REQUEST_BOOK_LIST_TO_SPRING,
    REQUEST_BOOK_TO_SPRING
  } from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
    requestBookListToSpring({ commit }) {
        return axiosInst.get("/book-list/whole-book")
            .then((res) => {
                commit(REQUEST_BOOK_LIST_TO_SPRING, res.data);
            })
    }
    
}