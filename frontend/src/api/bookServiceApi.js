import axiosClient from "./axiosClient"

const path = '/booking'
const bookServiceAPI = {
    findByUser: (params) => {
        const url = path + '/find/user'
        return axiosClient.get(url, { params })
    },
    getByIdBooking: (id) => {
        const url = path + `/${id}`
        return axiosClient.get(url)
    }
}
export default bookServiceAPI