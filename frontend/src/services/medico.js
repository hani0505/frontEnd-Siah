import { api } from "../api"

export async function createMed(payload) {
    const {data} = await api.post('/medico', payload)
    return data
}

export async function showMed() {
    const {data} = await api.get('/medico',)
    return data
}