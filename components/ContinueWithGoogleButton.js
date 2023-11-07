import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const ContinueWithGoogleButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.container}>
        <Image
          source={require("../assets/icons/google-logo-icon.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Continue with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "rgb(175, 190, 211)",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  text: {
    color: "rgb(29, 29, 29)",
    fontWeight: "bold",
    fontFamily: "robotoBold",
  },
});

export default ContinueWithGoogleButton;
