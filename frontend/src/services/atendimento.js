import { api } from "../api"

export async function iniciarAtendimento(pacienteId, medicoId) {
    const {data} = await api.post('/atendimento/iniciar', {
        pacienteId, medicoId
    })
    return data
}

export async function finalizarAtendimento(id) {
    const {data} = await api.post(`/atendimento/finalizar/${id}`,)
    return data
}

export async function historico() {
    const {data} = await api.get('/atendimento/historico')
    return data
}