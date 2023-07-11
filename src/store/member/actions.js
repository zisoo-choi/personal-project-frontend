import {

} from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
    // 아이디 중복 확인
    requestSpringToCheckIdDuplication ({}, payload) {
        const { memberId } = payload

        return axiosInst.get(`/library-member/cheke-id/${memberId}`)
            .then((res) => {
                if (res) {
                    alert('사용 가능한 이메일입니다!')
                    return true
                }
            })
            .catch((error) => {
                alert("문제 발생!")
            })
    },
    // 이메일 인증
    requestSpringToCheckEmailDuplication ({}, payload) {
        const { to } = payload

        return axiosInst.post("/email-authentication/send-email", payload)
            .then((res) => {
                alert("회원님의 계정으로 이메일 전송이 완료되었습니다.")
            })
    },
    // 이메일 코드 인증
    requestSpringToCheckAuthenticationCode ({}, payload) {
        const { authCode } = payload

        return axiosInst.post("/email-authentication/authentication-code", payload)
            .then((res) => {
                return res.data
            })
    },
    // 회원가입
    requestRegisterMemberToSpring ({}, payload) {
        const { memberId, memberPw, email, address, phoneNumber, memberRole } = payload

        return axiosInstances.springAxiosInst.post('/library-member/sign-up', {
                memberId,
                memberPw,
                email,
                address,
                phoneNumber,
                memberRole
            })
            .then((res) => {
                if(res == true){
                    alert('회원 가입 성공!')
                } else {
                    alert("회원 가입 실패")
                }
            })
            .catch(() => {
                alert('문제 발생!')
            })
    }
}
  