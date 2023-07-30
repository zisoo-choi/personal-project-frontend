<template lang="">
    <div>
        <table>
            <tr>
                <td>도서 번호</td>
                <td>
                    <input type="text" :value="hopeBook.hopeBookNumber" readonly/>
                </td>
            </tr>
            <tr>
                <td>저자</td>
                <td>
                    <input type="text" :value="hopeBook.author" readonly/>
                </td>
            </tr>
            <tr>
                <td>도서명</td>
                <td>
                    <input type="text" :value="hopeBook.bookName" readonly/>
                </td>
            </tr>
            <tr>
                <td>출판사</td>
                <td>
                    <input type="text" :value="hopeBook.publishCompany" readonly/>
                </td>
            </tr>
            <tr>
                <td>신청일자</td>
                <td>
                    <input type="text" :value="hopeBook.applicationDate" readonly/>
                </td>
            </tr>
            <tr>
                <td>신청인</td>
                <!-- 'book.member'가 정의되어 있을 때만 'memberId'를 표시 -->
                <input type="text" v-if="hopeBook.member" :value="hopeBook.member.memberId" readonly/>
                <span v-else>신청인 정보 없음</span>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "HopeReadBookForm",
    props: {
        hopeBook: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="">
    
</style>