<template lang="">
    <div>
        <table>
            <tr>
                <td>도서 번호</td>
                <td>
                    <input type="text" :value="book.bookNumber" readonly/>
                </td>
            </tr>
            <tr>
                <td>총 수량</td>
                <td>
                    <input type="text" :value="book.bookAmount" readonly/>
                </td>
            </tr>
            <tr>
                <td>저자</td>
                <td>
                    <input type="text" :value="book.author" readonly/>
                </td>
            </tr>
            <!-- <tr>
                <td>도서명</td>
                <td>
                    <input type="text" :value="book.bookName" readonly/>
                </td>
            </tr> -->
            <tr>
                <td>출판사</td>
                <td>
                    <input type="text" :value="book.publishCompany" readonly/>
                </td>
            </tr>
            <!-- <tr>
                <td>카테고리</td>
                <td>
                    <input type="text" :value="book.categorizationSymbol" readonly/>
                </td>
            </tr> -->
            <tr>
                <td>줄거리</td>
                <td>
                    <textarea cols="60" rows="20" :value="book.content" readonly/>
                </td>
            </tr>
            <tr>
                <td>관리자</td>
                <td>
                    <input type="text" :value="book.managerNumber" readonly/>
                </td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td>
                    <input type="text" :value="book.registrationDate" readonly/>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "ManagementReadBookForm",
    props: {
        book: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="">
    
</style>