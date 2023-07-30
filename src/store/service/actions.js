import Cookies from "js-cookie";
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

import axiosInst from "@/utility/axiosInst";

export default {
    // 희망 도서 신청
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
    // 희망 도서 목록 조회
    requestHopeBookListToSpring({ commit }) {
        return axiosInst.get("/library-service/hope-book-list")
        .then((res) => {
            commit(REQUEST_HOOP_BOOK_LIST_TO_SPRING, res.data)
        })
    },
    // 희망 도서 읽기
    requestHopeBookReadToSpring({ commit }, hopeBookNumber) {
        return axiosInst.get(`/library-service/hope-book-read/${hopeBookNumber}`)
        .then((res) => {
            commit(REQUEST_HOOP_BOOK_TO_SPRING, res.data);
        })
    },
    // 개별 희망 도서 읽기
    requestPersonalHopeToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/personal-hope-list")
        .then((res) => {
            commit(REQUEST_HOOP_BOOK_LIST_TO_SPRING, res.data);
        })
    },
    // 도서 대여
    requestRentalToSpring({}, bookNumber) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        return axiosInst.post("/library-service/rental", {
            bookNumber
        })
        .then((res) => {
            return res.data;
        })
        .catch(() => {
            alert("문제 발생!")
        })
    },
    // 대여 목록 조회
    requestRentalListToSpring({ commit }) {
        return axiosInst.get("/library-service/rental-book-list")
        .then((res) => {
            commit(REQUEST_RENT_BOOK_LIST_TO_SPRING, res.data);
        })
    },
    // 도서 반납
    requestReturnedToSpring({}, rentalNumber) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        return axiosInst.post("/library-service/return", {
            rentalNumber
        })
        .then((res) => {
            alert("도서 반납이 성공적으로 이루어졌습니다.")
            return res;
        })
        .catch(() => {
            alert("문제 발생!")
        })
    },
    // 개별 대여 기록 가져오기
    requestPersonalInfoToSpring({ commit }){
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/personal-rent-list")
        .then((res) => {
            commit(REQUEST_RENT_BOOK_LIST_TO_SPRING, res.data);
        })
    },
    // 도서 반납기한 연장
    requestExtensionDate({}, rentalNumber) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        return axiosInst.post("/library-service/extension", {
            rentalNumber
        }).then((res) => {
            return res.data;
        }).catch(() => {
            alert("문제 발생!")
        })
    },
    // 도서 예약
    requestReservatopnToSpring({}, bookNumber) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
        return axiosInst.post("/library-service/reservation", {
            bookNumber
        }).then((res) => {
            return res.data;
        }).catch(() => {
            alert("문제 발생!")
        })
    },
    // 예약 도서 목록
    requestReservationToSpring({ commit }){
         // axios의 기본 설정에 토큰을 포함시킵니다.
         const yourJwtToken = Cookies.get("refreshToken");
         axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;
        
         return axiosInst.get("/library-service/reservation-list")
         .then((res) => {
            commit(REQUEST_RESERVATION_LIST_TO_SPRING, res.data);
         })
    },
    // 개별 예약 도서 목록
    requestReservationInfoToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/personal-reservation-list")
        .then((res) => {
            commit(REQUEST_RESERVATION_LIST_TO_SPRING, res.data);
        })
    },
    // 개별 대여 건수
    requestPersonalRentalAmountToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/personal-rental-amount")
        .then((res) => {
            commit(REQUEST_PERSONAL_RENTAL_AMOUNT_TO_SPRING, res.data);
        })
    },
    // 개별 예약 건수
    requestPersonalReservationAmountToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/personal-reservation-amount")
        .then((res) => {
            commit(REQUEST_PERSONAL_RESERVATION_AMOUNT_TO_SPRING, res.data);
        })
    },
    // 개별 희망 도서 신청 건수
    requestPersonalHopeAmountToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/personal-hope-amount")
        .then((res) => {
            commit(REQUEST_PERSONAL_HOPE_AMOUNT_TO_SPRING, res.data);
        })
    },
    // 모든 회원의 대여 건수
    requestManagementRentalAmountToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/management-rental-amount")
        .then((res) => {
            commit(REQUEST_MANAGEMENT_RENTAL_AMOUNT_TO_SPRING, res.data);
        })
    },
    // 모든 회원의 예약 건수
    requestManagementReservationAmountToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/management-reservation-amount")
        .then((res) => {
            commit(REQUEST_MANAGEMENT_RESERVATION_AMOUNT_TO_SPRING, res.data);
        })
    },
    // 모든 회원의 희망 도서 신청 건수
    requestManagementHopeAmountToSpring({ commit }) {
        // axios의 기본 설정에 토큰을 포함시킵니다.
        const yourJwtToken = Cookies.get("refreshToken");
        axiosInst.defaults.headers.common['Authorization'] = `Bearer ${yourJwtToken}`;

        return axiosInst.get("/library-service/management-hope-amount")
        .then((res) => {
            commit(REQUEST_MANAGEMENT_HOPE_AMOUNT_TO_SPRING, res.data);
        })
    }
}