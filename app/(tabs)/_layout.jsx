import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Şişko",
        }}
      />
      <Tabs.Screen
        name="about/index"
        options={{
          headerShown: false,
          tabBarLabel: "Obez",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
