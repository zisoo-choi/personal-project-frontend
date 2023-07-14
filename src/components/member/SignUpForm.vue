<template lang="">
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
        <v-container class="white">
            <v-row justify="center">
                <v-col cols="auto" style="padding-bottom: 90px">
                    <v-card width="550" style="margin-top: 90px">
                        <v-card-text class="text-center px-12 py-16">
                            <v-form @submit.prevent="onSubmit" ref="form" class="signUpForm">
                                <div class="text-h4 font-weight-black mb-10">회원 가입</div>
                                <v-radio-group v-model="memberRole" row>
                                    <v-radio label="일반" value="NORMAL"></v-radio>
                                    <v-radio label="관리자" value="MANAGER"></v-radio>
                                </v-radio-group>
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="memberId"
                                        label="사용자 아이디"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                    <v-btn text large outlined style="font-size: 13px"
                                        class="mt-1 ml-2" color="teal lighten-1"
                                        @click="checkDuplicateId"
                                        :disabled="false">
                                        아이디 <br/>중복 확인
                                    </v-btn>
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
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="email"
                                        :rules="email_rule"
                                        label="google 이메일"
                                        :disabled="false"
                                        required
                                    ></v-text-field>
                                    <v-btn text large outlined style="font-size: 13px"
                                            class="mt-1 ml-2" color="teal lighten-1"
                                            @click="checkDuplicateEmail"
                                            :disabled="false">
                                            이메일 <br/>중복 확인
                                    </v-btn>
                                    <v-btn text large outlined style="font-size: 13px"
                                            class="mt-1 ml-2" color="teal lighten-1"
                                            @click="checkAuthenticationEmail"
                                            :disabled="false">
                                            google</br>이메일 인증
                                    </v-btn>
                                </div>
                                <div class="d-flex" v-if="isPressedButton" >
                                    <v-text-field
                                        v-model="emailCode"
                                        label="전송된 이메일 코드"
                                        
                                        type="password"
                                        :disabled="false"
                                    ></v-text-field>
                                    <v-btn text large outlined style="font-size: 13px"
                                            class="mt-3 ml-5" color="teal lighten-1"
                                            @click="checkDuplicateCode"
                                            :disabled="false">
                                            코드 검증
                                    </v-btn>
                                </div>
                                
                                <!-- 주소 찾기 API 넣기 -->
                                <div class="d-flex">
                                    <v-text-field
                                        v-model="address"
                                        label="주소"
                                        name="address"
                                        type="text"
                                        :disabled="false"
                                        required
                                        readonly
                                    ></v-text-field>
                                    <v-btn
                                        text
                                        large
                                        outlined
                                        style="font-size: 13px"
                                        class="mt-1 ml-2"
                                        color="teal lighten-1"
                                        @click="FindAddress"
                                    >
                                        주소 찾기
                                    </v-btn>
                                    </div>
                                    <div class="d-flex">
                                    <v-text-field
                                        v-model="address_detail"
                                        label="상세 주소"
                                        name="address_detail"
                                        type="text"
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
                                        color="green lighten-1" class="mt-6"
                                        :disabled="!isFormValid()" ><b>회원 신청하기</b></v-btn>
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
            emailPass: false,
            idPass: false,
            codePass: '',
            memberId: '',
            memberPw: '',
            memberRole: 'NORMAL',
            address: '',
            address_detail: '',
            phoneNumber: '',
            email: '',
            to: '',
            isPressedButton: '',
            emailCode: '',
            email_rule: [
                v => !!v || '이메일을 입력해주세요!',
                v => {
                    const replaceV = v.replace(/(\s*)/g, '')
                    const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
                    return pattern.test(replaceV) || '올바른 이메일 형식으로 입력해주세요!'
                }
            ],
        }
    },
    methods: {
        ...mapActions(MemberModule, [
            'requestSpringToCheckIdAuthentication',
            'requestSpringToCheckEmailAuthentication',
            'requestSpringToCheckAuthenticationCode',
            'requestSpringToCheckEmailDuplication'
        ]),
        FindAddress() {
            const self = this; // this 컨텍스트를 저장

            new daum.Postcode({
                oncomplete: function(data) {
                if (data.userSelectedType === 'R') {
                    self.address = data.roadAddress; // 도로명 주소 설정
                } else {
                    self.address = data.jibunAddress; // 지번 주소 설정
                }

                self.address_detail = ''; // 상세 주소 초기화
                },
            }).open();
        },
        onSubmit () {
            if (this.$refs.form.validate()) {
                this.address = this.address + " " + this.address_detail
                const { memberId, memberPw, email, address, phoneNumber, memberRole } = this
                this.$emit("submit", { memberId, memberPw, email, address, phoneNumber, memberRole })
            }
            else { 
                alert('올바른 정보를 입력하세요!')
            }

            // if (!this.emailPass) {
            //     alert("이메일 중복 확인을 해주세요!")
            // }
        },
        async checkDuplicateId () {
            this.idPass = await this.requestSpringToCheckIdAuthentication({ memberId: this.memberId});
            console.log('idPass: ' + this.idPass);

            if(this.idPass == false) {
                alert("중복된 아이디 입니다.");
            } else {
                alert("사용 가능한 아이디입니다 !");
            }
        },
        async checkDuplicateEmail () {
            const emailValid = this.email.match(
                /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            this.emailPass = false

            if (emailValid) {
                const { email } = this
                console.log('before actions - email: ' + email)
                this.emailPass = await this.requestSpringToCheckEmailDuplication({ email })
            }
        },
        async checkAuthenticationEmail () {
            this.to = this.email;
            const payload = { to: this.to };

            console.log('to: ' + this.to);

            this.emailPass = await this.requestSpringToCheckEmailAuthentication(payload);
            this.isPressedButton = true;
        },
        async checkDuplicateCode() {
            const payload = { authCode: this.emailCode };
            this.codePass = await this.requestSpringToCheckAuthenticationCode(payload);

            if(this.codePass){
                alert("이메일 인증이 완료 되었습니다.")
            } else {
                alert("인증 코드가 다릅니다.")
            }
        },
        isFormValid () {
            return this.memberId && this.memberPw && this.email && this.codePass;
            // return true // 테스트 용으로 일단 다 true
        },
    },
}
</script>

<style>
</style>