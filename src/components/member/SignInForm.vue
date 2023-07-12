<template lang="">
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
        <v-container class="white">
            <v-row justify="center">
                <v-col cols="auto" style="padding-bottom: 90px">
                    <v-card width="550" style="margin-top: 90px">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form" class="signUpForm">
                                <div class="text-h4 font-weight-black mb-10">로그인</div>

                                <div class="d-flex">
                                    <v-text-field
                                        v-model="memberId"
                                        label="사용자 아이디"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                </div>
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="memberPw"
                                        label="사용자 비밀번호"
                                        type="password"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                </div>

                                <v-btn type="submit" block x-large rounded
                                        color="green lighten-1" class="mt-6"
                                         ><b>로그인</b></v-btn>
                                </v-form>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
        return {
            memberId: '',
            memberPw: '',
        }
    },
    methods: {
        onSubmit () {
            if (this.$refs.form.validate()) {
                const { memberId, memberPw } = this
                this.$emit("submit", { memberId, memberPw })
            }
            else { 
                alert('올바른 정보를 입력하세요!')
            }
        },
    },
}

</script>

<style>
</style>