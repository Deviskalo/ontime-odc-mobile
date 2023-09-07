import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import COLORS from "../Constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView style={{ height: hp("50%") }}>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <Image
            source={require("../assets/ontimelogo.png")}
            style={{
              height: 40,
              width: 200,
              position: "absolute",
              top: 100,
              left: 75,
            }}
          />

          <View style={{ marginVertical: 110 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                color: COLORS.black,
                top: 70,
              }}>
              Hey, Welcome back!
            </Text>
            <Text style={{ fontSize: 18, top: 60 }}>
              Seems like you've missed alot
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
              Email address
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}>
              <TextInput
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.gray}
                keyboardType="email-address"
                style={{ width: "100%" }}
              />
            </View>
          </View>

          <View>
            <View style={{ marginBottom: 12 }}>
              <Text
                style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
                Password
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}>
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.gray}
                  secureTextEntry={isPasswordShown}
                  style={{ width: "100%" }}
                />

                <TouchableOpacity
                  style={{ position: "absolute", right: 12 }}
                  onPress={() => setIsPasswordShown(!isPasswordShown)}>
                  {isPasswordShown == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginVertical: 6 }}>
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? COLORS.primary : undefined}
            />
            <Text>Remember Me.</Text>

            <Pressable onPress={() => navigation.navigate("Forgot Password")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: wp("27.4%"),
                  bottom: 1,
                }}>
                Forgot Password?
              </Text>
            </Pressable>

            <Button
              onPress={() => navigation.navigate("Home")}
              title="Login"
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
                width: "100%",
                right: 353,
                top: 50,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 30,
            }}>
            <Text style={{ fontSize: 16, color: COLORS.black, top: 30 }}>
              Don't have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("Signup")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: 9,
                  top: 30,
                }}>
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
