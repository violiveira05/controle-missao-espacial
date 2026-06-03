import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  abrirSensores: () => void;
  abrirEventos: () => void;
  abrirAlertas: () => void;
};

export default function HomeScreen({
  abrirSensores,
  abrirEventos,
  abrirAlertas,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Controle de Missão Espacial</Text>

      <Text style={styles.subtitulo}>
        Sistema integrado para monitoramento de sensores, eventos operacionais
        e alertas críticos da missão.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>Status da Missão</Text>
        <Text style={styles.status}>Operacional</Text>
        <Text style={styles.texto}>Backend Spring Boot conectado à API.</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={abrirSensores}>
        <Text style={styles.botaoTexto}>Sensores e Módulos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={abrirEventos}>
        <Text style={styles.botaoTexto}>Eventos Operacionais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoAlerta} onPress={abrirAlertas}>
        <Text style={styles.botaoTexto}>Alertas Críticos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#10162F",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  subtitulo: {
    fontSize: 16,
    color: "#C9D1FF",
    textAlign: "center",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#1C254A",
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  cardTitulo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  status: {
    color: "#00FF99",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 8,
  },
  texto: {
    color: "#C9D1FF",
    marginTop: 8,
  },
  botao: {
    backgroundColor: "#2D6BFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  botaoAlerta: {
    backgroundColor: "#D93636",
    padding: 16,
    borderRadius: 10,
  },
  botaoTexto: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});