import axiosInst from "@/utility/axiosInst";
import Cookies from "js-cookie";

export default {
    // 아이디 중복 확인
    requestSpringToCheckIdAuthentication ({}, payload) {
        const { memberId } = payload

        return axiosInst.get(`/library-member/check-id/${memberId}`)
            .then((res) => {
                if (res) {
                    return res.data;
                }
            })
            .catch((error) => {
                console.error('문제 발생:', error);
                throw error;
            })
    },
    // 이메일 중복 확인
    requestSpringToCheckEmailDuplication ({ }, payload) {
        const { email } = payload
        console.log('email: ' + email)

        return axiosInst.get(`/library-member/check-email/${email}`)
            .then((res) => {
                if (res.data) {
                    alert('사용 가능한 이메일입니다!')
                    return true
                } else {
                    alert('중복된 이메일입니다!')
                    return false
                }
            })
            .catch((res) => {
                alert("문제 발생!")
            })
    },
    // 이메일 인증
    requestSpringToCheckEmailAuthentication ({}, payload) {
        const { to } = payload

        return axiosInst.post("/email-authentication/send-email", {to})
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

        return axiosInst.post('/library-member/sign-up', {
                memberId,
                memberPw,
                email,
                address,
                phoneNumber,
                memberRole
            })
            .then((res) => {
                if(res.data == true){
                    alert('회원 가입 성공!')
                    return res.data
                }
                if(res.data != true){
                    alert("회원 가입 실패")
                    return res.data 
                }
                return res.data
            })
            .catch(() => {
                alert('문제 발생!')
            })
    },
    // 로그인
    requestLoginMemberToSpring ({}, payload) {
        const { memberId, memberPw } = payload

        return axiosInst.post('/application/json', {
            memberId, memberPw
        })
        .then((res) => {
            if (res.data.accessToken) {
              const { accessToken, refreshToken } = res.data;
              Cookies.set('accessToken', accessToken);
              Cookies.set('refreshToken', refreshToken);
              location.reload()
              alert('회원님 반갑습니다!');
              return accessToken;
            } else {
              alert('회원이 아닙니다.');
              return null;
            }
          })
          .catch((error) => {
            console.error('로그인 실패:', error);
            throw error;
          });
    },
}