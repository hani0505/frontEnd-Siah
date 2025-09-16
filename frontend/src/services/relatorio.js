import { api } from "../api"

export async function obterRelatorio() {
    const {data} = await api.get('/relatorio')
    return data
}
