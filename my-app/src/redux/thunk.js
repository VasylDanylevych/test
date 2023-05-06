import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../services/api";

export const fetchUsersThunk = createAsyncThunk("users/fetchAll", () => fetchUsers());
