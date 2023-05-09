import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, followToUser } from "../services/api";

export const fetchUsersThunk = createAsyncThunk("users/fetchAll", () => fetchUsers());

export const updateFollowersThunk = createAsyncThunk("users/updateFollowers", async ({ id, isFollowing }) => {
    try {
        await followToUser(id, isFollowing);
        return { id, isFollowing };
    } catch (error) {
        console.error(error);
        throw error;
    }
});
