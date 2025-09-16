import { api } from "../api";

// Criar paciente -> POST /paciente
export async function createPacient(payload) {
  const { data } = await api.post("/paciente", payload);
  return data;
}

// Listar pacientes -> GET /paciente
export async function showPacient() {
  const { data } = await api.get("/paciente");
  return data;
}

// Alias para showPacient para compatibilidade
export const getAllPacients = showPacient;

// Obter pacientes aguardando triagem
export async function obterPacientesAguardandoTriagem() {
  const { data } = await api.get("/paciente", { params: { status: 'aguardando_triagem' } });
  return data;
}

// Obter pacientes aguardando avaliação médica
export async function obterPacientesAguardandoAvaliacaoMedica() {
  const { data } = await api.get("/paciente", { params: { status: 'aguardando_avaliacao_medica' } });
  return data;
}

// Atualizar status -> PATCH /paciente/:id/status
export async function editPacient(id, payload) {
  const { data } = await api.patch(`/paciente/${id}/status`, payload);
  return data;
}

// Alias para editPacient para compatibilidade
export const updatePacientStatus = editPacient;

// Salvar dados da triagem
export async function saveTriageData(id, payload) {
  const { data } = await api.patch(`/paciente/${id}/triagem`, payload);
  return data;
}
