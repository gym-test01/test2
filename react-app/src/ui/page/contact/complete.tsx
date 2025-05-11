import { useEffect } from "react";
import { store } from "../../../core/store/store";
import { resetFormInfo } from "../../../core/store/form-info/slice";
import { useNavigate } from "react-router-dom";

export const Complete = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // 画面を一番上に
    window.scrollTo(0, 0);
  }, []);

  const changeDateFormat = (date: string, time: string) => {
    const formattedDate = date.replaceAll("-", "/");
    return `${formattedDate}  ${time}`;
  };
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
          予約送信完了
        </h2>
        <section
          style={{
            textAlign: "center",
            borderRadius: "30px",
            padding: "16px",
            border: "2px solid gray",
          }}
        >
          <p>予約を受け付けました。</p>
          <p>連絡いたしますのでお待ちください。</p>
        </section>
        <section
          style={{
            margin: "5% auto",
          }}
        >
          <details>
            <summary style={{ borderBottom: "1px solid white", padding: "1%" }}>
              送信内容
            </summary>
            <dl
              style={{
                borderRadius: "30px",
                padding: "16px",
                backgroundColor: "#f5f5f5",
              }}
            >
              {displayList.map((v) =>
                v.dd === "" ? (
                  <div style={{ padding: "1rem  0 0 0" }}>
                    <dt style={{ fontWeight: "bold", fontSize: "18px" }}>
                      {v.dt}
                    </dt>
                  </div>
                ) : v.subTitle ? (
                  <div
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "1rem 0",
                    }}
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
                    style={{
                      borderBottom: "1px solid #ddd",
                      padding: "1rem 0",
                    }}
                  >
                    <dt style={{ fontWeight: "bold", fontSize: "18px" }}>
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
                )
              )}
            </dl>
          </details>
        </section>
      </div>
      <button
        onClick={() => {
          store.dispatch(resetFormInfo());
          navigate("/contact/form");
        }}
      >
        TOPへ
      </button>
      <button
        onClick={() => {
          navigate("/contact/confirm");
        }}
      >
        もどる
      </button>
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
