import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="coupons/index"
        options={{
          headerShown: false,
          tabBarLabel: "Kuponlarım",
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: false,
          tabBarLabel: "Anasayfa",
        }}
      />
      <Tabs.Screen
        name="branches/index"
        options={{
          headerShown: false,
          tabBarLabel: "Şubeler",
        }}
      />
      <Tabs.Screen
        name="profiles/index"
        options={{
          headerShown: false,
          tabBarLabel: "Profilim",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
