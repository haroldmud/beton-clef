import { createSlice } from "@reduxjs/toolkit";

const initials = 'sdfghjkl';
const menuSlice = createSlice({
  name:"menu",
  initialState: {value: initials},
  reducers:{
    menu: (state, actions) => {
      state.value = actions.payload
    }
  }
});

export const  { menu } = menuSlice.actions;
export default menuSlice.reducer;
