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
import { buscarSensores, cadastrarSensor } from "../services/api";

type Sensor = {
  id?: number;
  nome: string;
  tipo: string;
  modulo: string;
  leitura: number;
  unidade: string;
  status: string;
};

export default function SensoresScreen() {
  const [sensores, setSensores] = useState<Sensor[]>([]);
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [modulo, setModulo] = useState("");
  const [leitura, setLeitura] = useState("");
  const [unidade, setUnidade] = useState("");
  const [status, setStatus] = useState("");

  async function carregarSensores() {
    try {
      const dados = await buscarSensores();
      setSensores(dados);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível buscar os sensores.");
    }
  }

  async function salvarSensor() {
    if (!nome || !tipo || !modulo || !leitura || !unidade || !status) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    try {
      await cadastrarSensor({
        nome,
        tipo,
        modulo,
        leitura: Number(leitura),
        unidade,
        status,
      });

      setNome("");
      setTipo("");
      setModulo("");
      setLeitura("");
      setUnidade("");
      setStatus("");

      carregarSensores();
      Alert.alert("Sucesso", "Sensor cadastrado com sucesso.");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível cadastrar o sensor.");
    }
  }

  useEffect(() => {
    carregarSensores();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sensores e Módulos</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do sensor"
        placeholderTextColor="#AAB"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Tipo"
        placeholderTextColor="#AAB"
        value={tipo}
        onChangeText={setTipo}
      />

      <TextInput
        style={styles.input}
        placeholder="Módulo"
        placeholderTextColor="#AAB"
        value={modulo}
        onChangeText={setModulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Leitura"
        placeholderTextColor="#AAB"
        value={leitura}
        onChangeText={setLeitura}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Unidade"
        placeholderTextColor="#AAB"
        value={unidade}
        onChangeText={setUnidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Status"
        placeholderTextColor="#AAB"
        value={status}
        onChangeText={setStatus}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarSensor}>
        <Text style={styles.botaoTexto}>Cadastrar Sensor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={carregarSensores}>
        <Text style={styles.botaoTexto}>Atualizar Lista</Text>
      </TouchableOpacity>

      <FlatList
        data={sensores}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.nome}</Text>
            <Text style={styles.cardTexto}>Tipo: {item.tipo}</Text>
            <Text style={styles.cardTexto}>Módulo: {item.modulo}</Text>
            <Text style={styles.cardTexto}>
              Leitura: {item.leitura} {item.unidade}
            </Text>
            <Text style={styles.cardTexto}>Status: {item.status}</Text>
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