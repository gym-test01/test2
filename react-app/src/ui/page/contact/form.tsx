const MIN_AGE = 15;

export const Form = () => {
  const date = new Date();
  const year = date.getFullYear();
  const yearList: string[] = [];

  for (let i = 0; i < 100 - MIN_AGE; i++) {
    yearList.push(String(year - i - MIN_AGE));
  }

  return (
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
              お名前
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
            生年月日
          </label>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <select
              style={{
                flex: 1,
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              <option value="">-</option>
              {yearList.map((value) => (
                <option value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
            <span style={{ fontSize: "14px" }}>年</span>
            <select
              style={{
                flex: 1,
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "6px",
              }}
            >
              <option value="">-</option>
              {[...Array(12)].map((_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}月
                </option>
              ))}
            </select>
            <span style={{ fontSize: "14px" }}>月</span>
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
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              style={{ marginBottom: "12px", display: "flex", gap: "16px" }}
            >
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
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    boxSizing: "border-box",
                    marginBottom: "8px",
                  }}
                />
              </div>
              <div style={{ flex: 1 }}>
                <label
                  style={{
                    fontSize: "14px",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  {/* 第{n}希望 */}
                  &nbsp;
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    boxSizing: "border-box",
                  }}
                >
                  <option>終日</option>
                  {[...Array(13)].map((_, i) => {
                    const hour = 9 + i;
                    return <option key={hour}>{hour}:00</option>;
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
    </div>
  );
};
