<template>
    <div class="popup-container">
      <div class="popup">
        <h3>도서 삭제</h3>
        <p>삭제할 도서의 권수를 입력하세요:</p>
        <input type="number" v-model="deleteCount" />
        <button @click="onDelete()">삭제</button>
        <button @click="onCancel">취소</button>
        <p v-if="showErrorMessage" class="error-message">양수로만 입력하세요.</p>
      </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
const BookModule = "BookModule";

export default {
    data() {
        return {
            deleteCount: 0,
            showErrorMessage: false, // 오류 메시지를 보여줄지 여부를 관리하는 데이터
        };
    },
    props: {
        bookNumber: {
            type: Number,
            required: true,
        },
    },
    methods: {
        ...mapActions(BookModule, ["requestDeleteBoardToSpring"]),
        async onDelete() {
            // 입력값이 양수인지 검사
            if (this.deleteCount > 0) {
                await this.requestDeleteBoardToSpring({
                    bookNumber: this.bookNumber,
                    deleteCount: this.deleteCount,
                }).then(() => {
                    // 삭제가 완료되면 부모 컴포넌트로 삭제 완료 이벤트를 전달합니다.
                    this.$emit("onDeleteBooks", this.bookNumber, this.deleteCount);
                    this.showErrorMessage = false; // 오류 메시지 숨기기
                }).catch(() => {
                    alert("문제 발생!");
                });
            }
            else {
                this.showErrorMessage = true; // 오류 메시지 보이기
            }
        },
        onCancel() {
            // 취소 버튼을 클릭하면 팝업을 닫습니다.
            this.$emit("close-popup");
            this.showErrorMessage = false; // 오류 메시지 숨기기
        },
    },
};
</script>

<style>
/* 팝업 스타일을 원하는 대로 꾸밀 수 있습니다. */
.popup-container {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

.popup {
background-color: white;
padding: 20px;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.error-message {
color: red;
font-size: 12px;
}
</style>
