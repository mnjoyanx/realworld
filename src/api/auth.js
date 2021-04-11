import axios from '@/api/axios'

export const register = (credentials) => {
    axios.post('/users', {user: credentials})
}