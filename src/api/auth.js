import axios from '@/api/axios'

export const register = (body) => {
    return axios.post('/users', {user: body})
}