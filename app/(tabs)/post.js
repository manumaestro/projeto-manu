import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";


const API_KEY = "cv_cypGqMILty9dkItysUyTeJvWbmPMBMfPfkMIT_izG_5QYtdvmHkKwzmhIqmUiJJI";


const api = axios.create({
  baseURL: "https://api-ds.codeverse.dev.br",
  headers: {
    "x-api-key": API_KEY,
  },
});

export default function JogosCriarScreen() {
  const [titulo, setTitulo] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [genero, setGenero] = useState("");
  const [ano_lancamento, setAno_lancamento] = useState("");
  const [desenvolvedora, setDesenvolvedora] = useState("");

  const [enviando, setEnviando] = useState(false);

  async function criarJogo() {
    if (!titulo) {
      Alert.alert("Preencha pelo menos o título.");
      return;
    }

    setEnviando(true);
    try {
      const resposta = await api.post("/api/jogos", {
        title: titulo,
        imageUrl: imagemUrl,
        genero,
        plataforma,
        desenvolvedora,
      });

      Alert.alert("Jogo criado!", resposta.data.title);
      setTitulo("");
      setImagemUrl("");
      setGenero("");
      setAno_lancamento("");
      setDesenvolvedora("");
    } catch (e) {
      Alert.alert(
        "Não deu pra criar o jogo",
        "A API respondeu com erro. Confere se todos os campos estão certinhos e tenta de novo."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.conteudo}>
        <View style={styles.header}>
          <Text style={styles.tituloPagina}>Criar jogo</Text>
          <Text style={styles.subtitulo}>POST /api/jogos</Text>
        </View>

        <Text style={styles.rotulo}>Título</Text>
        <TextInput
          style={styles.campo}
          value={titulo}
          onChangeText={setTitulo}
          placeholder="Ex: God of War"
        />

        <Text style={styles.rotulo}>URL da imagem</Text>
        <TextInput
          style={styles.campo}
          value={imagemUrl}
          onChangeText={setImagemUrl}
          placeholder="Ex: https://pt.wikipedia.org/wiki/The_Last_of_Us"
        />

        <Text style={styles.secao}>Campos específicos do tema jogos</Text>

        <Text style={styles.rotulo}>Gênero</Text>
        <TextInput
          style={styles.campo}
          value={genero}
          onChangeText={setGenero}
          placeholder="Ex: Ação"
        />

        <Text style={styles.rotulo}>Ano de lançamento</Text>
        <TextInput
          style={styles.campo}
          value={ano_lancamento}
          onChangeText={ano_lancamento}
          placeholder="Ex: 2018"
        />

        <Text style={styles.rotulo}>Desenvolvedora</Text>
        <TextInput
          style={styles.campo}
          value={desenvolvedora}
          onChangeText={desenvolvedora}
          placeholder="Ex: Mojang"
        />

        <Pressable style={styles.botao} onPress={criarJogo} disabled={enviando}>
          <Text style={styles.botaoTexto}>{enviando ? "Enviando..." : "Criar jogo"}</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fce7ee" },
  conteudo: { padding: 24, paddingBottom: 48 },
  header: { marginBottom: 16 },
  tituloPagina: { fontSize: 24, fontWeight: "800", color: "#ce316d" },
  subtitulo: { fontSize: 14, color: "#b32c5f", marginTop: 2 },
  secao: {
    fontSize: 14,
    fontWeight: "700",
    color: "#ac2849",
    marginTop: 8,
    marginBottom: 8,
  },

  rotulo: { fontSize: 13, fontWeight: "600", color: "#a7214e", marginBottom: 4 },
  campo: {
    borderWidth: 1,
    borderColor: "#ffc8e2",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    backgroundColor: "white",
  },
  botao: {
    backgroundColor: "#db5186",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  botaoTexto: { color: "white", fontWeight: "700" },
});