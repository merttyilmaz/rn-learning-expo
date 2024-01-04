import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabsLayout = () => (
  <Tabs>
    <Tabs.Screen
      name="coupons/index"
      options={{
        headerShown: false,
        tabBarLabel: "Kuponlarım",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-list"
            size={12}
            color={focused ? "#000" : "#ccc"}
          />
        ),
      }}
    />

    <Tabs.Screen
      name="home/index"
      options={{
        headerShown: false,
        tabBarLabel: "Anasayfa",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-home"
            size={24}
            color={focused ? "#000" : "#ccc"}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="branches/index"
      options={{
        headerShown: false,
        tabBarLabel: "Şubeler",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-pin"
            size={24}
            color={focused ? "#000" : "#ccc"}
          />
        ),
      }}
    />
    <Tabs.Screen
      name="profiles/index"
      options={{
        headerShown: false,
        tabBarLabel: "Profilim",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-person"
            size={24}
            color={focused ? "#000" : "#ccc"}
          />
        ),
      }}
    />
  </Tabs>
);

export default TabsLayout;
