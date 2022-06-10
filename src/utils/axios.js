import axios from 'axios'
import router from '../router'

axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.withCredentials = true
axios.defaults.headers['token'] = localStorage.getItem('token') && localStorage.getItem('token_type') ? `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}` : ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
    if (res.data.resultCode != 200) {
        if (res.data.resultCode == 416) {
            router.push({ path: '/login' })
        }
        if (res.data.data && window.location.pathname == '/login') {
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('token_type', res.data.token_type)
            axios.defaults.headers['token'] = `${res.data.access_token} ${res.data.access_token}`;
        }
        return Promise.reject(res.data)
    }

    return res.data
})

export default axios