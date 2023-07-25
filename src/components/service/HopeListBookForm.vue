<template lang="">
    <div>
        <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
            <td colspan="4">현재 등록된 도서 목록이 없습니다!</td>
        </tr>
        <v-row v-if="books && books.length > 0">
            <v-col v-for="book in books" :key="book.hopeBookNumber" cols="2">
                <div align="center"> 
                    <router-link
                        :to="{
                            name: 'HopeReadBookPage',
                            params: { hopeBookNumber:book.hopeBookNumber.toString() },
                        }">
                        <img src="@/assets/downloadImg/도둑맞은 집중력.jpg" style="max-width: 65%; height: auto;"/>
                        <div>
                            {{ book.bookName }}
                        </div>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </div>
    
</template>
  
<script>
export default {
    props: {
        books: {
            type: Array,
        },
    },
};
</script>
  
<style>
.categoryBtn{
    margin: 20px;
}
</style>
  