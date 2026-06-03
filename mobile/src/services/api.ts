const API_URL = "http://localhost:8080/api";

export async function buscarSensores() {
  const response = await fetch(`${API_URL}/sensores`);
  return response.json();
}

export async function cadastrarSensor(sensor: any) {
  const response = await fetch(`${API_URL}/sensores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sensor),
  });

  return response.json();
}

export async function buscarEventos() {
  const response = await fetch(`${API_URL}/eventos`);
  return response.json();
}

export async function cadastrarEvento(evento: any) {
  const response = await fetch(`${API_URL}/eventos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(evento),
  });

  return response.json();
}

export async function buscarAlertas() {
  const response = await fetch(`${API_URL}/alertas`);
  return response.json();
}

export async function cadastrarAlerta(alerta: any) {
  const response = await fetch(`${API_URL}/alertas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(alerta),
  });

  return response.json();
}