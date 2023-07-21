import Cookies from "js-cookie";
import {
    REQUEST_HOOP_BOOK_LIST_TO_SPRING,
    REQUEST_HOOP_BOOK_TO_SPRING
} from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
    requestHopeBookToSpring({}, payload) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        const {
            bookName,
            author,
            publishCompany,
            categorizationSymbol,
            content,
            updateDate,
            bookAmount
        } = payload;

        return axiosInst.post("/library-service/hope-book", {
            bookName,
            author,
            publishCompany,
            categorizationSymbol,
            content,
            updateDate,
            bookAmount
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
    requestHopeBookToSpring({ commit }, hopeBookNumber) {
        return axiosInst.get(`/library-service/hope-book-read/${hopeBookNumber}`)
        .then((res) => {
            commit(REQUEST_HOOP_BOOK_TO_SPRING, res.data);
        })
    }
}