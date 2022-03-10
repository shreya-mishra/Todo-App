import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const AddToDo = ({ onPress, value, onChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Add your Task"
        value={value}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AddToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: "40%",
    height: 40,
    borderWidth: 2,
    textAlign: "center",
    margin: 10
  },
  button: {
    backgroundColor: "green",
    width: 100,
    height: 50,
    borderRadius: 20
    // marginLeft: 15,
    // marginTop: 8
    // padding: 39,
    // textAlign: "center"
  },
  text: {
    color: "white",
    fontSize: 32,
    textAlign: "center"
  }
});
