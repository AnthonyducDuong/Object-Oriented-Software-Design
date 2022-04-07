import axiosClient from "./axiosClient"
const path = 'auth/pet'
const petAPI = {
    getAll: (params) => {
        const url = path
        return axiosClient.get(url, { params })
    },
    getPet: (idPet) => {
        const url = path + `/${idPet}`
        return axiosClient.get(url, idPet)
    },
    addPet: (params) => {
        const url = path
        return axiosClient.post(url, params)
    },
    updatePet: (id, params) => {
        const url = params + `/${id}`
        return axiosClient.put(url, params)
    },
    deletePet: (id) => {
        const url = path + `/${id}`
        return axiosClient.delete(url)
    }
}

export default petAPI