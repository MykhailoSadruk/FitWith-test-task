import { TouchableOpacity, StyleSheet, Text } from "react-native";

const LoginButton = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#3b55f3",
  },
  text: {
    color: "#fff",
    fontFamily: "robotoBold",
    fontSize: 16,
  },
});

export default LoginButton;
