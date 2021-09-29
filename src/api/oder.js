import { axiosClient } from "./link.js";
const OderPro = {
    getAll() {
        const url = `/oder`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/oder/${id}`;
        return axiosClient.get(url);
    },
    addOder(oder) {
        const url = `/oder`;
        return axiosClient.post(url, oder);
    },
    remove(id) {
        const url = `/oder/${id}`;
        return axiosClient.delete(url);
    },

};
export default OderPro;