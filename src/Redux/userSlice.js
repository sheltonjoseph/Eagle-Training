import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
     reduxName:"",
     reduxEmail:"",
    },
    reducers: {
  update: (state,action) => {
    state.reduxName = action.payload.reduxName;
    state.reduxEmail = action.payload.reduxEmail;
  }
    }
})

export const { update } = userSlice.actions;
export default userSlice.reducer;