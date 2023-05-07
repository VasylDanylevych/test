import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, followToUser } from "../services/api";

export const fetchUsersThunk = createAsyncThunk("users/fetchAll", () => fetchUsers());

export const updateFollowersThunk = createAsyncThunk("users/updateFollowers", ({ id, isFollowing }) => followToUser(id, isFollowing));
