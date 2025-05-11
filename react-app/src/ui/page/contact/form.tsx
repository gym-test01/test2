import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./validation";
import { store } from "../../../core/store/store";
import { setFormInfo } from "../../../core/store/form-info/slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MIN_AGE = 18;
const MAX_AGE = 85;

const date = new Date();
date.setDate(date.getDate() + 1);
// sv-SEでハイフン区切り
const minDate = date.toLocaleDateString("sv-SE");
date.setFullYear(date.getFullYear() + 1);
const maxDate = date.toLocaleDateString("sv-SE");

type ContactFormData = {
  name: string;
  age: string;
  gender: string;
  tel: string;
  email: string;
  firstDate: string;
  firstTimePeriod: string;
  secondDate: string;
  secondTimePeriod: string;
  thirdDate: string;
  thirdTimePeriod: string;
  text: string;
};

export const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(formSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = async () => {
    store.dispatch(
      setFormInfo({
        name: watch("name"),
        age: watch("age"),
        gender: watch("gender"),
        tel: watch("tel"),
        email: watch("email"),
        firstDate: watch("firstDate"),
        firstTimePeriod: watch("firstTimePeriod"),
        secondDate: watch("secondDate"),
        secondTimePeriod: watch("secondTimePeriod"),
        thirdDate: watch("thirdDate"),
        thirdTimePeriod: watch("thirdTimePeriod"),
        text: watch("text"),
      })
    );
    navigate("/contact/confirm");
  };

  useEffect(() => {
    // 画面を一番上に
    window.scrollTo(0, 0);

    // 初期表示時storeに設定がある場合はそれをフィルイン
    const form = store.getState().formInfoSlice;
    setValue("name", form.name);
    setValue("age", form.age);
    setValue("gender", form.gender);
    setValue("tel", form.tel);
    setValue("email", form.email);
    setValue("firstDate", form.firstDate);
    setValue("firstTimePeriod", form.firstTimePeriod);
    setValue("secondDate", form.secondDate);
    setValue("secondTimePeriod", form.secondTimePeriod);
    setValue("thirdDate", form.thirdDate);
    setValue("thirdTimePeriod", form.thirdTimePeriod);
    setValue("text", form.text);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- 初期表示時実行のため
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
          無料カウンセリング予約
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label style={{ display: "flex" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "18px",
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
              {...register("name")}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "18px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ margin: "5px 2px", fontSize: "15px", color: "red" }}>
            {errors.name?.message || <>&nbsp;</>}
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              年齢
            </label>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <select
                {...register("age")}
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
                  <option key={i + MIN_AGE} value={i + MIN_AGE + "歳"}>
                    {i + MIN_AGE}歳
                  </option>
                ))}
                <option value={`${MAX_AGE}歳以上`}>{MAX_AGE}歳以上</option>
              </select>
            </div>
          </div>
          <div style={{ margin: "5px 2px", fontSize: "15px", color: "red" }}>
            {errors.age?.message || <>&nbsp;</>}
          </div>

          <div>
            <label style={{ display: "flex" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "18px",
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
              <label style={{ fontSize: "16px" }}>
                <input
                  type="radio"
                  value="男性"
                  {...register("gender")}
                  style={{ marginRight: "4px" }}
                />
                男
              </label>
              <label style={{ fontSize: "16px" }}>
                <input
                  type="radio"
                  value="女性"
                  {...register("gender")}
                  style={{ marginRight: "4px" }}
                />
                女
              </label>
              <label style={{ fontSize: "16px" }}>
                <input
                  type="radio"
                  value="その他"
                  {...register("gender")}
                  style={{ marginRight: "4px" }}
                />
                その他
              </label>
            </div>
          </div>
          <div
            style={{
              padding: "5px 2px 10px 2px",
              fontSize: "15px",
              color: "red",
            }}
          >
            {errors.gender?.message || <>&nbsp;</>}
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              電話番号
            </label>
            <input
              type="tel"
              {...register("tel")}
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
          <div
            style={{
              padding: "5px 2px 10px 2px",
              fontSize: "15px",
              color: "red",
            }}
          >
            {errors.tel?.message || <>&nbsp;</>}
          </div>

          <div>
            <label style={{ display: "flex" }}>
              <label
                style={{
                  display: "block",
                  fontWeight: "bold",
                  fontSize: "18px",
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
              {...register("email")}
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
          <div
            style={{
              padding: "5px 2px 10px 2px",
              fontSize: "15px",
              color: "red",
            }}
          >
            {errors.email?.message || <>&nbsp;</>}
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              希望日時
            </label>
            {["first", "second", "third"].map((v, i) => (
              <div key={i + 1} style={{ marginBottom: "12px", gap: "16px" }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: "flex" }}>
                    <label
                      style={{
                        fontSize: "16px",
                        display: "block",
                        marginBottom: "4px",
                        fontWeight: "bold",
                      }}
                    >
                      第{i + 1}希望
                    </label>
                    {i + 1 <= 2 && (
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
                    min={minDate}
                    max={maxDate}
                    {...register(`${v}Date` as keyof ContactFormData)}
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
                    {...register(`${v}TimePeriod` as keyof ContactFormData)}
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
                    {i + 1 > 2 && <option value="">-</option>}
                    <option value="終日">終日</option>
                    {[...Array(14)].map((_, i) => {
                      const hour = 9 + i;
                      return (
                        <option key={hour} value={hour + ":00"}>
                          {hour}:00
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              margin: "5px 2px 10px 2px",

              fontSize: "15px",
              color: "red",
            }}
          >
            {errors.firstDate?.message ||
              errors.firstTimePeriod?.message ||
              errors.secondDate?.message ||
              errors.secondTimePeriod?.message ||
              errors.thirdDate?.message ||
              errors.thirdTimePeriod?.message || <>&nbsp;</>}
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "4px",
              }}
            >
              備考
            </label>
            <textarea
              rows={6}
              placeholder="ご質問、ご相談等ありましたらご記載ください（最大500文字）"
              maxLength={500}
              {...register("text")}
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
          <div
            style={{
              margin: "5px 2px 10px 2px",
              fontSize: "15px",
              color: "red",
            }}
          >
            {errors.text?.message || <>&nbsp;</>}
          </div>

          <div>
            <input
              type="submit"
              value="内容の確認に進む"
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
      <div
        style={{
          // textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            setValue("name", "お好み焼きたろう");
            setValue("age", "22歳");
            setValue("gender", "男性");
            setValue("tel", "09000000000");
            setValue("email", "okonomi-yaki@example.com");
            setValue("firstDate", "2026-01-01");
            setValue("firstTimePeriod", "9:00");
            setValue("secondDate", "2026-01-01");
            setValue("secondTimePeriod", "終日");
            setValue("thirdDate", "2026-01-02");
            setValue("thirdTimePeriod", "終日");
            setValue(
              "text",
              "お好み焼きおいしい\nお好み焼き おい　しい\n食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい食べたい"
            );
          }}
        >
          確認用_全設定
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => {
            setValue("name", "お好み焼きはなこ");
            setValue("gender", "女性");
            setValue("email", "okonomi-yaki-monja@example.com");
            setValue("firstDate", "2026-01-04");
            setValue("firstTimePeriod", "終日");
            setValue("secondDate", "2026-02-01");
            setValue("secondTimePeriod", "12:00");
          }}
        >
          確認用_必須のみ設定
        </button>
      </div>
    </>
  );
};
