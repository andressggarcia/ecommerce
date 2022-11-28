import { createSlice } from '@reduxjs/toolkit';

export const isLoadinSlice = createSlice({
    name: 'isLoading',
    initialState: true,
    reducers: {
        setIsLoading: (state, action) =>{
            return action.payload
        }
    }
})

export const { setIsLoading } = isLoadinSlice.actions;

export default isLoadinSlice.reducer;
