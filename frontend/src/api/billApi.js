import axiosClient from "./axiosClient"

const path = '/auth'
const billAPI = {
    addBill: (params) => {
        const url = path + "/bill"
        return axiosClient.post(url, params)
    }
}
export default billAPI