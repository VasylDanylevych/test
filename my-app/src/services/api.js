import axios from "axios";

const URL = "https://6455fe215f9a4f2361384c60.mockapi.io";

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${URL}/users`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const followToUser = async (userId, followersCount) => {
    try {
        await axios.put(`${URL}/users/${userId}`, { followers: followersCount });
    } catch (error) {
        console.error(error);
    }
};
