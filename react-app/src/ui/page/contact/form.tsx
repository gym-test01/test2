const MIN_AGE = 18;
const MAX_AGE = 85;

// 希望日枠がいくつあるか
// [1, 2, 3] で第一から第三
// 必須2までは固定
const dateChoiceList = [1, 2, 3] as const;

const date = new Date();
date.setDate(date.getDate() + 1);
// sv-SEでハイフン区切り
const minDate = date.toLocaleDateString("sv-SE");
date.setFullYear(date.getFullYear() + 1);
const maxDate = date.toLocaleDateString("sv-SE");

export const Form = () => {
  return (
    <>
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "16px" }}>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          無料カウンセリング予約
        </h2>
        <form>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "flex" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                氏名
              </label>
              <label
                style={{
                  fontSize: "9px",
                  marginLeft: "5px",
                  color: "red",
                }}
              >
                ※
              </label>
            </label>
            <input
              type="text"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "4px",
              }}
            >
              年齢
            </label>

            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <select
                style={{
                  WebkitAppearance: "none",
                  flex: 1,
                  padding: "12px",
                  fontSize: "16px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                }}
              >
                <option value="">-</option>
                {[...Array(MAX_AGE - MIN_AGE)].map((_v, i) => (
                  <option value={i + MIN_AGE}>{i + MIN_AGE}歳</option>
                ))}
                <option value={`${MAX_AGE}以上`}>{MAX_AGE}歳以上</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "flex" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                性別
              </label>
              <label
                style={{
                  fontSize: "9px",
                  marginLeft: "5px",
                  color: "red",
                }}
              >
                ※
              </label>
            </label>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <label style={{ fontSize: "14px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  style={{ marginRight: "4px" }}
                />
                男
              </label>
              <label style={{ fontSize: "14px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  style={{ marginRight: "4px" }}
                />
                女
              </label>
              <label style={{ fontSize: "14px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  style={{ marginRight: "4px" }}
                />
                その他
              </label>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "4px",
              }}
            >
              電話番号
            </label>
            <input
              type="tel"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "flex" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "14px",
                  marginBottom: "4px",
                }}
              >
                メールアドレス
              </label>
              <label
                style={{
                  fontSize: "9px",
                  marginLeft: "5px",
                  color: "red",
                }}
              >
                ※
              </label>
            </label>
            <input
              type="email"
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              ご希望日時
            </label>
            {dateChoiceList.map((n) => (
              <div key={n} style={{ marginBottom: "12px", gap: "16px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "flex" }}>
                    <label
                      style={{
                        fontSize: "14px",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      第{n}希望
                    </label>
                    {n <= 2 && (
                      <label
                        style={{
                          fontSize: "9px",
                          marginLeft: "5px",
                          color: "red",
                        }}
                      >
                        ※
                      </label>
                    )}
                  </label>
                  <input
                    type="date"
                    defaultValue={""}
                    min={minDate}
                    max={maxDate}
                    style={{
                      WebkitAppearance: "none",
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      boxSizing: "border-box",
                      textAlign: "left",
                      marginBottom: "4px",
                      height: "2.6em",
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <select
                    style={{
                      WebkitAppearance: "none",
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="all">終日</option>
                    {[...Array(14)].map((_, i) => {
                      const hour = 9 + i;
                      return (
                        <option key={hour} value={hour}>
                          {hour}:00
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "14px",
                marginBottom: "4px",
              }}
            >
              備考
            </label>
            <textarea
              rows={6}
              placeholder="ご質問、ご相談等ありましたらご気軽に入力してください（最大500文字）"
              maxLength={500}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              value="内容の確認に進む"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#000",
                color: "#fff",
                cursor: "pointer",
              }}
            />
          </div>
        </form>
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
      </div>
    </>
  );
};
