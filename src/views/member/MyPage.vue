<template lang="">
    <div>
        <my-page-member-info-form />
        </br>
        </br>
        </br>
        <my-page-form />
    </div>
</template>

<script>
import MyPageForm from '@/components/member/myPage/MyPageForm.vue';
import MyPageMemberInfoForm from '@/components/member/myPage/MyPageMemberInfoForm.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        MyPageForm,
        MyPageMemberInfoForm
    }
}
</script>

<style lang="css">
</style>