import Cookies from "js-cookie";
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
    },
    requestCategoryListToSpring({ commit }, categorizationSymbol) {
        return axiosInst.get(`/book-list/category-book/${categorizationSymbol}`)
        .then((res) => {
            commit(REQUEST_BOOK_LIST_TO_SPRING, res.data);
        })
    },
    requestBookToSpring({commit}, bookNumber) {
        return axiosInst.get(`/book-list/read-book/${bookNumber}`)
        .then((res) => {
            commit(REQUEST_BOOK_TO_SPRING, res.data);
        });
    },
    requestDeleteBoardToSpring({}, bookNumber) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        return axiosInst.delete(`/book-list/delete-book/${bookNumber}`)
        .then((res) => {
            alert("삭제 성공!");
        })
        .catch(() => {
            alert("문제 발생!");
        });
    },
    requestBookModifyToSpring({}, payload) {
        const { bookAmount, content, updateDate, bookNumber } = payload;

        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        console.log(
            ", content: "+content+
            ", updateDate: "+updateDate+
            ", bookNumber: "+bookNumber
        );

        return axiosInst.put(`/book-list/modify-book/${bookNumber}`,
            { bookAmount, content, updateDate, bookNumber })
        .then((res) => {
            alert("수정 성공!");
          })
          .catch(() => {
            alert("문제 발생!");
          });
    }
}