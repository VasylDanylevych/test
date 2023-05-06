import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "./thunk";

const handleFulfilledGet = (state, { payload }) => {
    state.users = payload;
};

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsersThunk.fulfilled, handleFulfilledGet);
    },

    reducers: {
        getUsers(state, action) {
            state.users = action.payload;
        },
    },
});

export const usersReducer = usersSlice.reducer;
