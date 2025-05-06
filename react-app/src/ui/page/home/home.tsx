import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>home</h1>
      <button onClick={() => navigate("/contact/form")}>/contactへ</button>
    </>
  );
};
