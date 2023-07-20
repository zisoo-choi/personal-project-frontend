<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td>도서명</td>
                    <td>
                        <input type="text" v-model="bookName"/>
                    </td>
                </tr>
                <tr>
                    <td>총 수량</td>
                    <td>
                        <input type="number" v-model="bookAmount" />
                    </td>
                </tr>
                <tr>
                    <td>저자</td>
                    <td>
                        <input type="text" v-model="author"/>
                    </td>
                </tr>
                <tr>
                    <td>출판사</td>
                    <td>
                        <input type="text" v-model="publishCompany"/>
                    </td>
                </tr>
                <tr>
                    <td>카테고리</td>
                    <td>
                        <input type="text" v-model="categorizationSymbol"/>
                    </td>
                </tr>
                <tr>
                    <td>줄거리</td>
                    <td>
                        <textarea cols="60" rows="20" v-model="content" />
                    </td>
                </tr>
            </table>
            <div>
                <v-btn type="submit">등록 완료</v-btn>
                <router-link
                    :to="{
                        name: 'WholeBookPage',
                        // params: { bookNumber: book.bookNumber.toString() },
                    }">
                    돌아가기
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bookName: "",
            author: "",
            publishCompany: "",
            categorizationSymbol: "",
            content: "",
            updateDate: "",
            bookAmount: ""
        };
    },
}
</script>

<style lang="">
    
</style>