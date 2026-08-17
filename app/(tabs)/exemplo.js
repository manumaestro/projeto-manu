import { View, Text, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Exemplo() {
    // logica aqui
    // usar api
    return (
        // aqui renderiza ou coloca os itens na tela
        <View>
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
        <Text style={styles.title}>Manuela Maestro</Text>


        </View>
        </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f3a0bc",
    },
    container: {
        felx: 1,
        padding: 24,
        gap: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: "800",
        color: "#cc286c",
    },
    list: {
        gap: 12,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        padding: 16,
        borderRadius: 18,
        backgroundColor: "#fdd3e1",
    },
    badge: {
        width: 32,
        height: 32,
        borderRadius: 16,
        textAlign: "center",
        lineHeight: 32,
        fontSize: 14,
        fontWeight: "700",
        color: "#ffffff",
        backgroundColor: "#e23477",
    },
    listText: {
        flex: 1,
        fontSize: 15,
        color: "#3f091e",
    },
});