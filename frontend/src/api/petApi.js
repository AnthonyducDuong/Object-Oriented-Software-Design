import axiosClient from "./axiosClient"
const path = 'auth/pet'
const petAPI = {
    getAll: (params) => {
        const url = path
        return axiosClient.get(url, { params })
    },
    addPet: (params) => {
        const url = path
        return axiosClient.post(url, { params })
    },
    updatePet: (params) => {
        const url = params + `/${params.id}`
        return axiosClient.put(url, { params })
    },
    deletePet: (id) => {
        const url = path + `/${id}`
        return axiosClient.delete(url)
    }
}

export default petAPI