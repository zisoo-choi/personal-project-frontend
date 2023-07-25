<template lang="">
    <div class="full">
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
            const signUpComplete = this.requestRegisterMemberToSpring(payload)

            if(signUpComplete != false) {
                this.$router.push("/sign-in")
            }
        }
    }
}
</script>

<style lang="">
    
</style>