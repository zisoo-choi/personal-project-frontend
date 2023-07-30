<template lang="">
    <div>
        <management-library-info-form />
        <management-book-form />
    </div>
</template>

<script>
import ManagementBookForm from "@/components/book/manager/ManagementBookForm.vue"
import ManagementLibraryInfoForm from "@/components/book/manager/ManagementLibraryInfoForm.vue"

export default {
    name: "ManagementBookPage",
    components: {
        ManagementBookForm,
        ManagementLibraryInfoForm
    }
}
</script>

<style lang="css">
</style>