import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "#fe0f7f",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerTitle: "Projeto Base",
        }}
      />
      <Tabs.Screen
        name="aulas"
        options={{
          title: "Aulas",
          headerTitle: "Conteúdo",
        }}
      />

       <Tabs.Screen
      name="aulas - API"
      option={{
        title: "API",
        headerTitle: "Conteúdo - API",
      }}
      />

      <Tabs.Screen
      name="aulas - Post"
      option={{
        title: "Post",
        headerTitle: "Conteúdo - Post",
      }}

      />
    </Tabs>
  );
}
