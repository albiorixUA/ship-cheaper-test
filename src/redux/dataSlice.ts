import { Values } from "types/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: Values = {
  dataInvoiceModal: {},
  dataBankModal: {},
  dataContactModal: {},
  allData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,

  reducers: {
    addDataInvoiceModal(state, action) {
      state.dataInvoiceModal = action.payload;
    },
    addDataBankModal(state, action) {
      state.dataBankModal = action.payload;
    },
    addDataContactModal(state, action) {
      state.dataContactModal = action.payload;
      state.allData.push({
        id: Date.now(),
        ...state.dataBankModal,
        ...state.dataContactModal,
        ...state.dataInvoiceModal,
      });
    },
    deleteData(state, action) {
      state.allData = state.allData.filter(({ id }) => id !== action.payload);
    },
  },
});

export default dataSlice.reducer;

export const { addDataInvoiceModal } = dataSlice.actions;
export const { addDataBankModal } = dataSlice.actions;
export const { addDataContactModal } = dataSlice.actions;
export const { deleteData } = dataSlice.actions;

export const getAllData = ({ data }: RootState) => data.allData;
export const getDataInvoiceModal = ({ data }: RootState) =>
  data.dataInvoiceModal;
export const getDataBankModal = ({ data }: RootState) => data.dataBankModal;
export const getDataContactModal = ({ data }: RootState) =>
  data.dataContactModal;
