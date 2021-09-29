import { axiosClient } from "./link.js";

const UserAPI = {
    getAll() {
        const url = `/user`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
};
export default UserAPI;