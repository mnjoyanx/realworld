import axios from "@/api/axios"

export const getTags = () => {
    return axios.get('/tags')
}