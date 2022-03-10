import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ListItems = ({ item, onDelete }) => {
  const handlePress = () => {
    onDelete(item.id);
  };
  return (
    <View style={[styles.container]}>
      <View style={styles.textArea}>
        <Text adjustsFontSizeToFit style={styles.text}>
          {item.value}
        </Text>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListItems;
const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // // borderColor: "white",
    // paddingVertical: 15,
    backgroundColor: "#808080		",
    flexDirection: "row",
    flex: 1,
    // width: "100%",
    borderRadius: 5,
    elevation: 10,
    borderWidth: 2,
    alignItems: "center",
    marginLeft: 60,
    margin: 10
  },
  text: {
    marginLeft: 5,
    fontSize: 16
  },
  textArea: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 20,
    backgroundColor: "red",
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  buttonText: {
    color: "white",
    fontSize: 20
  }
});
