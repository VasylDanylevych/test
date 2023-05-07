import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk, updateFollowersThunk } from "./thunk";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleFulfilledGet = (state, { payload }) => {
    state.items = payload;
    state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

const updateFollowers = (state, { payload }) => {
    const updatedItems = state.items.map((item) => {
        if (item.id === payload.id) {
            return { ...item, followers: payload.isFollowing };
        }
        return item;
    });

    return {
        ...state,
        items: updatedItems,
    };
};

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.fulfilled, handleFulfilledGet)
            .addCase(fetchUsersThunk.pending, handlePending)
            .addCase(fetchUsersThunk.rejected, handleRejected)
            .addCase(updateFollowersThunk.fulfilled, updateFollowers);
    },
});

export const usersReducer = usersSlice.reducer;
