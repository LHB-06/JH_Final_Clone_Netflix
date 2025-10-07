import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // 아래에 만들 userSlice 불러오기

const store = configureStore({
  reducer: {
    user: userReducer, // user라는 상태를 userReducer가 관리
  },
});

export default store;

// 이 앱의 모든 상태를 저장하는 파일
