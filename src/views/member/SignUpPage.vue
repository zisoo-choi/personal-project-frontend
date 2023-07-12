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
            this.requestRegisterMemberToSpring(payload)
        }
    }
}
</script>

<style lang="">
    
</style>