import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialFormInfo = {
  name: "",
  age: "",
  gender: "",
  tel: "",
  email: "",
  firstDate: "",
  firstTimePeriod: "",
  secondDate: "",
  secondTimePeriod: "",
  thirdDate: "",
  thirdTimePeriod: "",
  text: "",
};

export type FormInfo = typeof initialFormInfo;

const formInfoSlice = createSlice({
  name: "formInfoSlice",
  initialState: initialFormInfo,
  reducers: {
    setFormInfo: (state, action: PayloadAction<FormInfo>) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.tel = action.payload.tel;
      state.email = action.payload.email;
      state.firstDate = action.payload.firstDate;
      state.firstTimePeriod = action.payload.firstTimePeriod;
      state.secondDate = action.payload.secondDate;
      state.secondTimePeriod = action.payload.secondTimePeriod;
      state.thirdDate = action.payload.thirdDate;
      state.thirdTimePeriod = action.payload.thirdTimePeriod;
      state.text = action.payload.text;
    },
    resetFormInfo: (state) => {
      state.name = initialFormInfo.name;
      state.age = initialFormInfo.age;
      state.gender = initialFormInfo.gender;
      state.tel = initialFormInfo.tel;
      state.email = initialFormInfo.email;
      state.firstDate = initialFormInfo.firstDate;
      state.firstTimePeriod = initialFormInfo.firstTimePeriod;
      state.secondDate = initialFormInfo.secondDate;
      state.secondTimePeriod = initialFormInfo.secondTimePeriod;
      state.thirdDate = initialFormInfo.thirdDate;
      state.thirdTimePeriod = initialFormInfo.thirdTimePeriod;
      state.text = initialFormInfo.text;
    },
  },
});

export const { setFormInfo, resetFormInfo } = formInfoSlice.actions;
export const formInfoReducer = formInfoSlice.reducer;
