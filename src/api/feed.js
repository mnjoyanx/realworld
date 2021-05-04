import axios from "@/api/axios"

export const getTags = () => {
    return axios.get('/tags')
}

export const getArticles = (apiUrl) => {
    return axios.get(apiUrl)
}