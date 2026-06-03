import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { buscarEventos, cadastrarEvento } from "../services/api";

type Evento = {
  id?: number;
  sistema: string;
  descricao: string;
  nivel: string;
  status: string;
  dataHora: string;
};

export default function EventosScreen() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [sistema, setSistema] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nivel, setNivel] = useState("");
  const [status, setStatus] = useState("");
  const [dataHora, setDataHora] = useState("");

  async function carregarEventos() {
    try {
      const dados = await buscarEventos();
      setEventos(dados);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar os eventos.");
    }
  }

  async function salvarEvento() {
    if (!sistema || !descricao || !nivel || !status || !dataHora) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      await cadastrarEvento({
        sistema,
        descricao,
        nivel,
        status,
        dataHora,
      });

      setSistema("");
      setDescricao("");
      setNivel("");
      setStatus("");
      setDataHora("");

      carregarEventos();
      Alert.alert("Sucesso", "Evento cadastrado com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o evento.");
    }
  }

  useEffect(() => {
    carregarEventos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eventos Operacionais</Text>

      <TextInput
        style={styles.input}
        placeholder="Sistema"
        placeholderTextColor="#AAB"
        value={sistema}
        onChangeText={setSistema}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        placeholderTextColor="#AAB"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Nível"
        placeholderTextColor="#AAB"
        value={nivel}
        onChangeText={setNivel}
      />

      <TextInput
        style={styles.input}
        placeholder="Status"
        placeholderTextColor="#AAB"
        value={status}
        onChangeText={setStatus}
      />

      <TextInput
        style={styles.input}
        placeholder="Data e hora"
        placeholderTextColor="#AAB"
        value={dataHora}
        onChangeText={setDataHora}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarEvento}>
        <Text style={styles.botaoTexto}>Cadastrar Evento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={carregarEventos}>
        <Text style={styles.botaoTexto}>Atualizar Lista</Text>
      </TouchableOpacity>

      <FlatList
        data={eventos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.sistema}</Text>
            <Text style={styles.cardTexto}>Descrição: {item.descricao}</Text>
            <Text style={styles.cardTexto}>Nível: {item.nivel}</Text>
            <Text style={styles.cardTexto}>Status: {item.status}</Text>
            <Text style={styles.cardTexto}>Data/Hora: {item.dataHora}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#10162F",
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#2D6BFF",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  botaoSecundario: {
    backgroundColor: "#1C254A",
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  botaoTexto: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#1C254A",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitulo: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardTexto: {
    color: "#C9D1FF",
    marginTop: 4,
  },
});