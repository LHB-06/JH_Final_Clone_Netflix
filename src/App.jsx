import React from "react";
import { BrowserRouter } from "react-router-dom"; // 추가
// AppRoutes.jsx 안에서 BrowserRouter 을 사용할 경우 Header/Footer
// 가 라우터 밖에 있어서 Error 가 날 수 있음
import { Provider } from "react-redux";
import store from "./store/store";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <AppRoutes />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
