import {
    KEYWORD_SEARCH_LIST_RESULT,
    KEYWORD_SEARCH_RESULT
} from "./mutation-types";

import axiosInst from "@/utility/axiosInst";

export default {
    requestSearchResultToSpring({ commit }, payload) {
        const { keyword } = payload;

        return axiosInst.get("navigation/search-keyword", { keyword })
            .then((res) => {
                alert("키워드에 대한 북 리스트 가져오기 성공!");
                commit(KEYWORD_SEARCH_LIST_RESULT, res.data);
            })
            .catch(() => {
                alert("문제 발생!");
            });
    },
}
  