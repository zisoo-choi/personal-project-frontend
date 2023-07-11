<template lang="">
    <div>
        <sign-up-form @submit="onSubmit"></sign-up-form>
    </div>
</template>

<script>
import SignUpForm from "@/components/member/SignUpForm.vue";
import { mapActions } from "vuex";

const MemberModule = 'MemberModule'

export default {
    components: {
        SignUpForm
    },
    methods: {
        ...mapActions(MemberModule, ['requestRegisterMemberToSpring']),
        async onSubmit (payload) {
            const isSuccess = this.requestRegisterMemberToSpring(payload)
            // 회원 가입 성공 시, router를 이용하여 로그인 페이지로 이동
            if(isSuccess) {
                  this.$router.push("/sign-in")
            }
        }
    }
}
</script>

<style lang="">
    
</style>