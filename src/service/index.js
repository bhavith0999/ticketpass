import axios from '../utils/axios'

export function login(body) {
    return axios.post('/api/login', body);
}

export function createEvent(body) {
    return axios.post('/api/events', body);
}

export function getEvents() {
    return axios.get('/api/events')
}

export function getEvent(id) {
    return axios.get(`/api/events/${id}`)
}