import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false, // 로그인 여부
  userInfo: null, // 로그인한 사용자 정보
};

const userSlice = createSlice({
  name: "user", // slice 이름
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.userInfo = action.payload; // 로그인 시 사용자 정보 저장
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userInfo = null; // 로그아웃 시 초기화
    },
  },
});

export const { login, logout } = userSlice.actions; // 액션 생성기 export
export default userSlice.reducer; // 리듀서 export

// Redux Toolkit 에서 상태, 액션(상태 변경 함수) 등을 모아놓은 단위를 slice
// 여기서는 user 의 상태 (로그인상태) 를 관리할 것이다.

export const selectUser = (state) => state.user.userInfo; // 추가
export const selectIsLoggedIn = (state) => state.user.isLoggedIn; // 추가
