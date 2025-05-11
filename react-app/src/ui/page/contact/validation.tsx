import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("入力してください")
    .min(2, "2文字以上で入力してください")
    .max(50, "50文字以内で入力してください"),
  age: Yup.string().defined(),
  gender: Yup.string().required("選択してください"),
  tel: Yup.string()
    .defined()
    .matches(/^[0-9]*$/, { message: "数字で入力してください" })
    .max(11, "11文字以内で入力してください")
    .test("tel-min", "10文字以上で入力してください", (value) => {
      return value ? value.length >= 10 : true;
    }),
  email: Yup.string()
    .required("入力してください")
    .email("メールアドレスの形式が不正です")
    .max(254, "254文字以内で入力してください"),
  firstDate: Yup.string().required("第1希望の日付を設定してください"),
  firstTimePeriod: Yup.string().required("第1希望の時間を設定してください"),
  secondDate: Yup.string()
    .required("第2希望の日付を設定してください")
    .test("duplicate2", "第2希望の日時が重複しています", function (value) {
      const { firstDate, firstTimePeriod, secondTimePeriod } = this.parent;
      return dateChoiceCheck(
        firstDate,
        firstTimePeriod,
        value,
        secondTimePeriod
      );
    }),
  secondTimePeriod: Yup.string().required("第2希望の時間を設定してください"),
  thirdDate: Yup.string()
    .defined()
    .test("duplicate3", "第3希望の日時が重複しています", function (value) {
      const {
        firstDate,
        firstTimePeriod,
        secondDate,
        secondTimePeriod,
        thirdTimePeriod,
      } = this.parent;
      return dateChoiceCheck(
        firstDate,
        firstTimePeriod,
        secondDate,
        secondTimePeriod,
        value,
        thirdTimePeriod
      );
    })
    .test("existCheck", "第3希望の日付を設定してください", function (value) {
      const { thirdTimePeriod } = this.parent;
      return !value ? !thirdTimePeriod : true;
    }),
  thirdTimePeriod: Yup.string()
    .defined()
    .test("existCheck", "第3希望の時間を設定してください", function (value) {
      const { thirdDate } = this.parent;
      return !value ? !thirdDate : true;
    }),
  text: Yup.string()
    .defined()
    .max(500, "500文字以内で入力してください")
    .test({
      message: "空白・改行のみの入力はできません",
      test: (value) => (value ? value.trim() !== "" : true),
    }),
});

const dateChoiceCheck = (
  firstDate: string,
  firstTimePeriod: string,
  secondDate: string,
  secondTimePeriod: string,
  thirdDate?: string,
  thirdTimePeriod?: string
): boolean => {
  const toDateTime = (date?: string, time?: string) => `${date}-${time}`;
  if (!thirdDate) {
    return (
      toDateTime(firstDate, firstTimePeriod) !==
      toDateTime(secondDate, secondTimePeriod)
    );
  } else {
    const third = toDateTime(thirdDate, thirdTimePeriod);
    return (
      third !== toDateTime(firstDate, firstTimePeriod) &&
      third !== toDateTime(secondDate, secondTimePeriod)
    );
  }
};
