<template lang="">
    <div>
        <h2>관리자 페이지</h2>
        <management-book-form />
    </div>
</template>

<script>
import ManagementBookForm from "@/components/book/manager/ManagementBookForm.vue"

export default {
    name: "ManagementBookPage",
    components: { ManagementBookForm }
}
</script>

<style lang="">
    
</style>