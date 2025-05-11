import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "../ui/page/home/home";
import { Form } from "../ui/page/contact/form";
import { Confirm } from "../ui/page/contact/confirm";
import { Complete } from "../ui/page/contact/complete";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/test2"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/contact/form" element={<Form />} />
        <Route path="/contact/confirm" element={<Confirm />} />
        <Route path="/contact/complete" element={<Complete />} />
        <Route
          path="/error"
          element={
            <>
              <h1>エラー</h1>
              <p>エラーが発生しました。</p>
              <p>時間をおいてから、再度お試しください。</p>
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>404</h1>
              <p>ページが見つかりません。</p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
