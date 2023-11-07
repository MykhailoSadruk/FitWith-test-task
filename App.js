import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import ContinueWithGoogleButton from "./components/ContinueWithGoogleButton";
import Separator from "./components/Separator";
import LoginButton from "./components/LoginButton";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isFontsLoaded] = useFonts({
    robotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  return isFontsLoaded ? (
    <>
      <StatusBar style="dark" />

      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("./assets/icons/fit-with-logo.png")}
          />
        </View>
        <Text style={styles.wolcomeText}>Welcome Back</Text>
        <Text style={styles.loginToAccountText}>Login to your account</Text>
        <ContinueWithGoogleButton />
        <Separator />
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputTitle}>Username/Email</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="rgb(175, 190, 211)"
            placeholder="Username or Email"
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.textInputTitle}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholderTextColor="rgb(175, 190, 211)"
            placeholder="Password"
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordTextContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        <LoginButton />
        <Text style={styles.registerText}>
          New to FitWith? <Text style={styles.registerTextBlue}>Register</Text>
        </Text>
      </SafeAreaView>
    </>
  ) : (
    <AppLoading />
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
  },
  logo: {
    width: 100,
    height: 30,
  },
  logoContainer: {
    marginBottom: 20,
  },
  wolcomeText: {
    fontSize: 20,
    letterSpacing: 0,
    color: "#1d1d1d",
    fontFamily: "robotoBold",
  },
  loginToAccountText: {
    color: "#4b6589",
    fontWeight: "500",
    fontFamily: "robotoMedium",
    marginBottom: 10,
  },
  textInputContainer: {
    width: "100%",
    marginVertical: 8,
  },
  textInput: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: "rgb(175, 190, 211)",
    borderWidth: 1,
    fontFamily: "robotoMedium",
  },
  textInputTitle: {
    marginBottom: 8,
    fontFamily: "robotoBold",
    fontSize: 14,
  },
  forgotPasswordText: {
    width: "100%",
    textAlign: "right",
    color: "#9ca3b4",
  },
  forgotPasswordTextContainer: {
    width: "100%",
  },
  registerText: {
    marginTop: 10,
    fontFamily: "robotoRegular",
  },
  registerTextBlue: {
    color: "rgb(59, 85, 243)",
    marginLeft: 5,
  },
});
