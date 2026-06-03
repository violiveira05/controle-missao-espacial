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
import { buscarAlertas, cadastrarAlerta } from "../services/api";

type Alerta = {
  id?: number;
  titulo: string;
  descricao: string;
  severidade: string;
  origem: string;
  status: string;
  dataHora: string;
};

export default function AlertasScreen() {
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [severidade, setSeveridade] = useState("");
  const [origem, setOrigem] = useState("");
  const [status, setStatus] = useState("");
  const [dataHora, setDataHora] = useState("");

  async function carregarAlertas() {
    try {
      const dados = await buscarAlertas();
      setAlertas(dados);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar os alertas.");
    }
  }

  async function salvarAlerta() {
    if (!titulo || !descricao || !severidade || !origem || !status || !dataHora) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      await cadastrarAlerta({
        titulo,
        descricao,
        severidade,
        origem,
        status,
        dataHora,
      });

      setTitulo("");
      setDescricao("");
      setSeveridade("");
      setOrigem("");
      setStatus("");
      setDataHora("");

      carregarAlertas();
      Alert.alert("Sucesso", "Alerta cadastrado com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o alerta.");
    }
  }

  useEffect(() => {
    carregarAlertas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alertas Críticos</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor="#AAB"
        value={titulo}
        onChangeText={setTitulo}
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
        placeholder="Severidade"
        placeholderTextColor="#AAB"
        value={severidade}
        onChangeText={setSeveridade}
      />

      <TextInput
        style={styles.input}
        placeholder="Origem"
        placeholderTextColor="#AAB"
        value={origem}
        onChangeText={setOrigem}
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

      <TouchableOpacity style={styles.botaoAlerta} onPress={salvarAlerta}>
        <Text style={styles.botaoTexto}>Cadastrar Alerta</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={carregarAlertas}>
        <Text style={styles.botaoTexto}>Atualizar Lista</Text>
      </TouchableOpacity>

      <FlatList
        data={alertas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text style={styles.cardTexto}>Descrição: {item.descricao}</Text>
            <Text style={styles.cardTexto}>Severidade: {item.severidade}</Text>
            <Text style={styles.cardTexto}>Origem: {item.origem}</Text>
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
  botaoAlerta: {
    backgroundColor: "#D93636",
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