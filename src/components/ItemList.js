import { FlatList, View, StyleSheet } from "react-native";
import ListItems from "./ListItems";

const ItemList = ({ data, onDelete }) => {
  console.log("data", data);
  const renderFunction = ({ item }) => (
    <ListItems style={styles.listItemStyles} item={item} onDelete={onDelete} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderFunction}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  listItemStyles: {
    marginVertical: 3
  }
});
