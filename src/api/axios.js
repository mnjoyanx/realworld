import axios from 'axios'
import {getitem} from '@/helpers/localeStorage'


axios.defaults.baseURL = 'https://conduit.productionready.io/api'
axios.interceptors.request.use(config => {
    const token = getitem('accessToken')
    const authorizationToken = token ? `Token ${token}` : ''
    config.headers.authorization = authorizationToken
    return config
})

export default axios