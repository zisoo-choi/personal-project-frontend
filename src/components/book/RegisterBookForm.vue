<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <th>도서명</th>
                    <td>
                        <input type="text" v-model="bookName"/>
                    </td>
                </tr>
                <tr>
                    <th>총 수량</th>
                    <td>
                        <input type="number" v-model="bookAmount" />
                    </td>
                </tr>
                <tr>
                    <th>저자</th>
                    <td>
                        <input type="text" v-model="author"/>
                    </td>
                </tr>
                <tr>
                    <th>출판사</th>
                    <td>
                        <input type="text" v-model="publishCompany"/>
                    </td>
                </tr>
                <tr>
                    <th>카테고리</th>
                    <td>
                        <select type="text" v-model="categorizationSymbol">
                            <option value="PHILOSOPHY">철학</option>
                            <option value="RELIGION">종교</option>
                            <option value="SOCIAL_SCIENCE">사회과학</option>
                            <option value="NATURAL_SCIENCE">자연과학</option>
                            <option value="TECHNOLOGY">기술과학</option>
                            <option value="ART">예술</option>
                            <option value="LANGUAGE">언어</option>
                            <option value="LITERATURE">문학</option>
                            <option value="HISTORY">역사</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>줄거리</th>
                    <td>
                        <textarea cols="60" rows="20" v-model="content" />
                    </td>
                </tr>
                <tr>
                    <th>사진 등록</th>
                    <s3-image-upload @fileSelected="onFileSelected"/>
                </tr>
            </table>
            <div>
                <v-btn type="submit">등록 완료</v-btn>
                <router-link :to="{name: 'ManagementBookPage'}">
                    돌아가기
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import S3ImageUpload from './S3ImageUpload.vue';

export default {
    data() {
        return {
            bookName: "",
            author: "",
            publishCompany: "",
            categorizationSymbol: "",
            content: "",
            updateDate: "",
            bookAmount: "",
            filePathList: "", // 자식 컴포넌트에서 받아온 파일 key 값을 저장할 변수
        };
    },
    components: {
        S3ImageUpload
    },
    methods: {
        onSubmit() {
            console.log('Selected File Key:', this.filePathList);

            const {
                bookName,
                author,
                publishCompany,
                categorizationSymbol,
                content,
                updateDate,
                bookAmount,
                filePathList
            } = this;
            this.$emit("submit",
            { bookName,
                author,
                publishCompany,
                categorizationSymbol,
                content,
                updateDate,
                bookAmount,
                filePathList
            });
        },
        onFileSelected(fileKey) {
            this.filePathList = fileKey;
        },
    }
}
</script>

<style lang="">
    
</style>