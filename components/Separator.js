import { View, Text, StyleSheet } from "react-native";

const Separator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    maxWidth: "50%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgb(217, 218, 219)",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 12,
    color: "rgb(109, 137, 175)",
    fontFamily: "robotoRegular",
  },
});

export default Separator;
