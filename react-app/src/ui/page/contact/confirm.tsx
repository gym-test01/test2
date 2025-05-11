import { useEffect, useState } from "react";
import { store } from "../../../core/store/store";
import { useNavigate } from "react-router";

const changeDateFormat = (date: string, time: string) => {
  const formattedDate = date.replaceAll("-", "/");
  return `${formattedDate}  ${time}`;
};

export const Confirm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formInfo = store.getState().formInfoSlice;
  const displayList = [
    { dt: "氏名", dd: formInfo.name },
    { dt: "年齢", dd: formInfo.age || "-" },
    { dt: "性別", dd: formInfo.gender },
    { dt: "電話番号", dd: formInfo.tel || "-" },
    { dt: "メールアドレス", dd: formInfo.email },
    { dt: "希望日時", dd: "" },
    {
      dt: "第1希望",
      dd: changeDateFormat(formInfo.firstDate, formInfo.firstTimePeriod),
      subTitle: true,
    },
    {
      dt: "第2希望",
      dd: changeDateFormat(formInfo.secondDate, formInfo.secondTimePeriod),
      subTitle: true,
    },
    {
      dt: "第3希望",
      dd: formInfo.thirdDate
        ? changeDateFormat(formInfo.thirdDate, formInfo.thirdTimePeriod)
        : "-",
      subTitle: true,
    },
    { dt: "備考", dd: formInfo.text || "-" },
  ];

  const onClick = () => {
    setLoading(true);
    // 送信処理
    setTimeout(() => {
      navigate("/contact/complete");
    }, 1000);
  };

  useEffect(() => {
    // 画面を一番上に
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "16px" }}>
        <h2
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          予約内容の確認
        </h2>
        <dl>
          {displayList.map((v) =>
            v.dd === "" ? (
              <div style={{ padding: "1rem  0 0 0" }}>
                <dt style={{ fontWeight: "bold", fontSize: "18px" }}>{v.dt}</dt>
              </div>
            ) : v.subTitle ? (
              <div
                style={{ borderBottom: "1px solid #ddd", padding: "1rem 0" }}
              >
                <dt
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginLeft: "10px",
                  }}
                >
                  {v.dt}
                </dt>
                <dd
                  style={{
                    fontSize: "18px",
                    marginTop: "1%",
                    wordBreak: "break-word",
                  }}
                >
                  {v.dd}
                </dd>
              </div>
            ) : (
              <div
                style={{ borderBottom: "1px solid #ddd", padding: "1rem 0" }}
              >
                <dt style={{ fontWeight: "bold", fontSize: "18px" }}>{v.dt}</dt>
                <dd
                  style={{
                    fontSize: "18px",
                    marginTop: "1%",
                    wordBreak: "break-word",
                  }}
                >
                  {v.dd}
                </dd>
              </div>
            )
          )}
        </dl>

        <button
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "14px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#eee",
            color: "#333",
            cursor: "pointer",
          }}
          onClick={() => navigate("/contact/form")}
          disabled={loading}
        >
          入力内容の修正
        </button>
        <button
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "14px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={onClick}
          disabled={loading}
        >
          この内容で送信する
        </button>
      </div>

      <footer
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.9rem",
          marginTop: "1%",
          color: "gray",
        }}
      >
        &copy; 2025 Okonomiyaki Gym
      </footer>
    </>
  );
};
