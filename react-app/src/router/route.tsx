import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../ui/page/home/home";
import { Form } from "../ui/page/contact/form";

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
        <Route path="/contact/confirm" element={<h1>確認</h1>} />
        <Route path="/contact/complete" element={<h1>完了</h1>} />
        <Route path="/error" element={<h1>エラー</h1>} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
