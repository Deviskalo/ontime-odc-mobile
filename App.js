import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Signup, Welcome, ForgotPassword } from "./Screens/index";
import HomeScreen from "./Screens/HomeScreen";
import Events from "./Screens/Events";
import Activities from "./Screens/Activities";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "orange" : "gray",
                fontWeight: "700",
                fontSize: 15,
              }}>
              Home
            </Text>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Events"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "orange" : "gray",
                fontWeight: "700",
                fontSize: 15,
              }}>
              Events
            </Text>
          ),
        }}
        component={Events}
      />
      <Tab.Screen
        name="Activities"
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text
              style={{
                color: focused ? "orange" : "gray",
                fontWeight: "700",
                fontSize: 15,
              }}>
              Activities
            </Text>
          ),
        }}
        component={Activities}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Default">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgot Password"
          component={ForgotPassword}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Default"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
