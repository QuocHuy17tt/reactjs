import { axiosClient } from "./link.js";

const SlideAPI = {
    getAll() {
        const url = `/slide`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/slide/${id}`;
        return axiosClient.get(url);
    },
};
export default SlideAPI;