<template lang="">
  <div>
    <h2>회원 목록</h2>
    <hr class="custom-hr">
    <table style="width: 100%; height: 100%">
      <tr>
        <th align="center" width="10%">회원</br>번호</th>
        <th align="center" width="15%">아이디</th>
        <th align="center" width="20%">이메일</th>
        <th align="center" width="15%">전화번호</th>
        <th align="center" width="15%">계정 상태</th>
        <th align="center" width="15%">서비스</br>상태</th>
        <th align="center" width="10%">잔여 수</th>
        <th align="center" width="8%"></th>
      </tr>
      <tr v-if="!members || (Array.isArray(members) && members.length === 0)">
        <td colspan="4">현재 등록된 회원이 없습니다!</td>
      </tr>
      <tr v-else v-for="member in members" :key="member.memberNumber">
        <td align="center">
          {{ member.memberNumber }}
        </td>
        <td align="center">
          {{ member.memberId }}
        </td>
        <td align="center">
          {{ member.email }}
        </td>
        <td align="center">
          {{ member.phoneNumber }}
        </td>
        <td align="center">
          {{ member.memberState }}
        </td>
        <td align="center">
          {{ member.memberServiceState }}
        </td>
        <td align="center">
          {{ member.availableAmount }}
        </td>
        <td>
          <button @click="onStopClick(member)">정지</button>
        </td>
      </tr>
    </table>
    <div class="popup-container" v-if="onPopup">
      <div class="popup">
        <h3>회원 계정 정지</h3>
        <p>해당 [{{selectedMember.memberId}}] 회원 계정을 정지하시겠습니까?</p>
        <button @click="onStop(selectedMember.memberId)">Yes</button>
        <button @click="onCancel">No</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

const MemberModule = "MemberModule"

export default {
  data() {
    return {
      onPopup: false,
      selectedMember: null, // 선택한 회원 정보를 저장할 데이터
    };
  },
  props: {
    members: {
      type: Array,
    },
  },
  computed: {
    ...mapState(MemberModule, ["member", "memberInfo"]),
  },
  methods: {
    onStopClick(member) {
      this.selectedMember = member; // 선택한 회원 정보를 업데이트합니다.
      this.onPopup = true; // 팝업을 열도록 설정합니다.
    },
    isLogin(){
      return this.memberInfo !== null;
    },
    onCancel() {
      this.onPopup = false;
    },
    ...mapActions(MemberModule, ["requestStopMemberToSpring", "requestMemberListToSpring"]),
    async onStop(memberId) {
      if (!this.isLogin()) {
        return false;
      }

      // 현재 로그인된 사용자의 아이디를 가져옵니다.
      const managerId = this.memberInfo.memberId;

      if (!managerId) {
        alert("로그인이 필요합니다.");
        return;
      }

      await this.requestStopMemberToSpring({ memberId, managerId });
      await this.requestMemberListToSpring();

      // 계정 정지가 완료되면 팝업을 닫습니다.
      this.onPopup = false;
    },
  }
};
</script>

<style lang="css">
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
</style>
