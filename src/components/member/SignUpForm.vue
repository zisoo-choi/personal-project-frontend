<template lang="">
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
        <v-container class="white">
            <v-row justify="center">
                <v-col cols="auto" style="padding-bottom: 90px">
                    <v-card width="460" style="margin-top: 90px">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form" class="signUpForm">
                                <div class="text-h4 font-weight-black mb-10">회원 가입</div>
                                <div class="d-flex" style="center;">
                                    <input v-model="memberRole " type="radio" name="role">일반</input>
                                    &nbsp;
                                    <input v-model="memberRole" type="radio" name="role">관리자</input>
                                </div>
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="memberId"
                                        label="사용자 아이디"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                    <v-btn text large outlined style="font-size: 13px"
                                            class="mt-3 ml-5" color="teal lighten-1"
                                            @click="checkDuplicateId"
                                            :disabled="false">
                                            아이디 <br/>중복 확인
                                    </v-btn>
                                </div>
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="memberPw"
                                        label="사용자 비밀번호"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                </div>
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="email"
                                        :rules="email_rule"
                                        label="google 이메일"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                    <v-btn text large outlined style="font-size: 13px"
                                            class="mt-3 ml-5" color="teal lighten-1"
                                            @click="checkDuplicateEmail"
                                            :disabled="false">
                                            google</br>이메일 인증
                                    </v-btn>
                                </div>
                                
                                <!-- 주소 찾기 API 넣기 -->
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="address"
                                        label="주소"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                </div>

                                <div class="d-flex">
                                    <v-text-field
                                        v-model="phoneNumber"
                                        label="전화번호"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                </div>

                                <v-btn type="submit" block x-large rounded
                                        color="orange lighten-1" class="mt-6"
                                        :disabled="!isFormValid()">회원 신청하기</v-btn>
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
import { mapActions } from 'vuex'

const MemberModule = 'MemberModule'

export default {
    data () {
        return {
            email: "",
            emailPass: false,
            email_rule: [
                v => !!v || '이메일을 입력해주세요!',
                v => {
                    const replaceV = v.replace(/(\s*)/g, '')
                    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
                    return pattern.test(replaceV) || '올바른 이메일 형식으로 입력해주세요!'
                }
            ],
            idPass: '',
            memberPw: '',
            memberId: '',
            memberRole: '',
            address: '',
            phoneNumber: '',

        }
    },
    methods: {
        ...mapActions(MemberModule, [
            'requestSpringToCheckIdDuplication',
            'requestSpringToCheckEmailDuplication'
        ]),
        onSubmit () {
        },
        async checkDuplicateId () {
            this.idPass = await this.requestSpringToCheckIdDuplication({ memberId: this.memberId});
            
            console.log('idPass: ' + this.idPass);
            if(this.idPass == true) {
                alert("사용할 수 있는 아이디 입니다.");
            } else {
                alert("중복된 아이디 입니다.");
            }
        },
        async checkDuplicateEmail () {
        },
        isFormValid () {
        }
    },
}

</script>

<style>
</style>