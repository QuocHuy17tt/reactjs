import { axiosClient } from "./link.js";

const CateAPI = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(categories) {
        const url = `/category`;
        return axiosClient.post(url, categories);
    },
    remove(id) {
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    },
    update(id,data){
        const url = `category/${id}`;
        return axiosClient.put(url,data);
    },
};
export default CateAPI;