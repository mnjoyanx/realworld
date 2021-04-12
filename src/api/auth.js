import axios from '@/api/axios'

export const register = (body) => {
    axios.post('/auth/register', {body, Headers: {'Content-type': 'application/json'}})
}