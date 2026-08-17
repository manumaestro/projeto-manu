import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const minhaFoto = require("../../assets/minhaFoto.png");

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Image
            source={minhaFoto}
            style={styles.logo}
            resizeMode="cover"
          />
          <Text style={styles.eyebrow}>Manuela Maestro</Text>
          <Text style={styles.title}>Dev Junior</Text>
          <Text style={styles.description}>
            Estudante de Desenvolvimento de Sistemas no SENAI Valinhos✨.
          </Text>
        </View>

        <Text style={styles.title2}>Sobre Mim</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Hobbies⚡</Text>
          <Text style={styles.cardItem}>• Jogar Videogame</Text>
          <Text style={styles.cardItem}>• Tocar guitarra</Text>
          <Text style={styles.cardItem}>• Pintar</Text>
          <Text style={styles.cardItem}>• Cantar</Text>
        </View>

        <View style={styles.card}>
            <Text style={styles.cardTitle}>Top Jogos e Filmes</Text>
            <Text style={styles.cardTitle}>• The Last Of Us I</Text>
            <Text style={styles.cardTitle}>• The Last Of Us II</Text>
            <Text style={styles.cardTitle}>• Harry Potter e o 
            prisioneiro de Azkaban </Text>
        </View>

        <Link href="/modal" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Abrir modal de exemplo</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffbcd6",
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 20,
  },
  hero: {
    alignItems: "center",
    gap: 10,
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#ff5689",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 4,
    borderRadius: 100,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#d32c6c",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#ffffff",
    textAlign: "center",
  },
   title2: {
    fontSize: 22,
    fontWeight: "800",
    color: "#d32c6c",
    textAlign: "flex",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#edf5ff",
    textAlign: "center",
  },
  card: {
    gap: 8,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#fcdfe6",
    shadowColor: "#d32c6c",
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 0.8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#cc2b60",
  },
  cardItem: {
    fontSize: 15,
    color: "#ad3960",
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#ec5c8c",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
});
