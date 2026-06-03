import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import SensoresScreen from "./src/screens/SensoresScreen";
import EventosScreen from "./src/screens/EventosScreen";
import AlertasScreen from "./src/screens/AlertasScreen";

type Tela = "Home" | "Sensores" | "Eventos" | "Alertas";

export default function App() {
  const [telaAtual, setTelaAtual] = useState<Tela>("Home");

  function renderizarTela() {
    if (telaAtual === "Sensores") {
      return <SensoresScreen />;
    }

    if (telaAtual === "Eventos") {
      return <EventosScreen />;
    }

    if (telaAtual === "Alertas") {
      return <AlertasScreen />;
    }

    return (
      <HomeScreen
        abrirSensores={() => setTelaAtual("Sensores")}
        abrirEventos={() => setTelaAtual("Eventos")}
        abrirAlertas={() => setTelaAtual("Alertas")}
      />
    );
  }

  return (
    <View style={styles.fundo}>
      <View style={styles.appMobile}>
        {telaAtual !== "Home" && (
          <TouchableOpacity
            style={styles.botaoVoltar}
            onPress={() => setTelaAtual("Home")}
          >
            <Text style={styles.textoVoltar}>← Voltar para Home</Text>
          </TouchableOpacity>
        )}

        {renderizarTela()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#050816",
    alignItems: "center",
    justifyContent: "center",
  },
  appMobile: {
    width: "100%",
    maxWidth: 430,
    height: "100%",
    backgroundColor: "#10162F",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#25305F",
  },
  botaoVoltar: {
    backgroundColor: "#0B1026",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#25305F",
  },
  textoVoltar: {
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});