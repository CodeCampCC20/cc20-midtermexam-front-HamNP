import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyTodo from "../pages/MyTodo";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="mytodo" element={<MyTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
