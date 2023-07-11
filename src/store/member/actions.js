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
}
  