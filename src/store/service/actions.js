import Cookies from "js-cookie";
import {
    REQUEST_HOOP_BOOK_LIST_TO_SPRING,
    REQUEST_HOOP_BOOK_TO_SPRING,
    REQUEST_RENT_BOOK_LIST_TO_SPRING,
    REQUEST_RENT_BOOK_TO_SPRING
  } from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
    requestHopeBookRegisterToSpring({}, payload) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        const {
            bookName,
            author,
            publishCompany,
            categorizationSymbol,
        } = payload;

        return axiosInst.post("/library-service/hope-book", {
            bookName,
            author,
            publishCompany,
            categorizationSymbol,
        }).then((res) => {
            alert("희망 도서 신청 성공!");
            return res;
        })
        .catch(() => {
            alert("문제 발생!")
        })
    },
    requestHopeBookListToSpring({ commit }) {
        return axiosInst.get("/library-service/hope-book-list")
        .then((res) => {
            commit(REQUEST_HOOP_BOOK_LIST_TO_SPRING, res.data)
        })
    },
    requestHopeBookReadToSpring({ commit }, hopeBookNumber) {
        return axiosInst.get(`/library-service/hope-book-read/${hopeBookNumber}`)
        .then((res) => {
            commit(REQUEST_HOOP_BOOK_TO_SPRING, res.data);
        })
    },
    requestRentalToSpring({}, bookNumber) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        return axiosInst.post("/library-service/rental", {
            bookNumber
        })
        .then((res) => {
            alert("도서 대여가 성공적으로 이루어졌습니다.")
            return res;
        })
        .catch(() => {
            alert("문제 발생!")
        })
    },
    requestRentalListToSpring({ commit }) {
        return axiosInst.get("/library-service/rental-book-list")
        .then((res) => {
            commit(REQUEST_RENT_BOOK_LIST_TO_SPRING, res.data);
        })
    }
}