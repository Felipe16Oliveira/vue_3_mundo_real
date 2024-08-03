import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/felipe16oliveira/vue_3_mundo_real',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/events')
    }
}