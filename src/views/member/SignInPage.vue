<template lang="">
    <div>
        <sign-in-form @submit="onSubmit"></sign-in-form>
    </div>
</template>

<script>
import SignInForm from "@/components/member/SignInForm.vue";
import { mapActions } from "vuex";

const MemberModule = 'MemberModule'

export default {
    components: {
        SignInForm
    },
    methods: {
        ...mapActions(MemberModule, ['requestLoginMemberToSpring']),
        async onSubmit (payload) {
            // alert("로그인 버튼이 눌렸습니다.")
            const userToken = this.requestLoginMemberToSpring(payload)
            
            if(userToken != null) {
                this.$router.push("/")
            }
        }
    }
}
</script>

<style lang="">
    
</style>