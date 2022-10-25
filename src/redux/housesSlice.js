import { createSlice } from "@reduxjs/toolkit";


const housesSlice = createSlice({
    name:"nouses",
    initialState: {
        isLoading:true,
        data: []
    },
    reducers: {
        setData: (state,action) => {
            state.isLoading = false;
            state.data = action.payload
        }
    }
})

export const housesSliceAction = housesSlice.actions
export const housesSliceReduser = housesSlice.reducer
