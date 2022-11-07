import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IProduct {
  // modalStatus: boolean;
  // modalName: string | null;
  // badgeStatus: boolean;
  addNewColumnStatus: boolean;
}

const initialState: IProduct = {
  // modalStatus: false,
  // modalName: null,
  // badgeStatus: false,
  addNewColumnStatus: false,
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addNewColumn(state, action: PayloadAction<boolean>) {
      state.addNewColumnStatus = action.payload;
    }
    // showModal(state, action: PayloadAction<boolean>) {
    //   state.modalStatus = action.payload;
    // },
    // sendModalName(state, action: PayloadAction<string | null>) {
    //   state.modalName = action.payload;
    // },
    // showBadge(state, action: PayloadAction<boolean>) {
    //   state.badgeStatus = action.payload;
    // },
  }
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;