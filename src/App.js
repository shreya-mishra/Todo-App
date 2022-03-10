import { useState } from "react";
import { View, StyleSheet } from "react-native";
import AddToDo from "./components/AddToDo";
import ItemList from "./components/ItemList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");

  const inputHandler = (text) => {
    setTodo(text);
  };

  const handleSetList = () => {
    console.log("add the task pls", todo);
    if (!todo) {
      setError(true);
      console.log("here");
      return;
    }

    const newInput = {
      id: Math.random() * 1000,
      value: todo
    };
    console.log(newInput);
    setTodoList([...todoList, newInput]);
    setTodo("");
    setError(false);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <View>
      <AddToDo value={todo} onChange={inputHandler} onPress={handleSetList} />
      <View style={styles.listArea}>
        <ItemList data={todoList} onDelete={handleDelete} />
        {/* <Error visible={error}>Please insert a valid text</Error> */}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#dbb043"
  },
  inputArea: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  listArea: {
    flex: 8,
    paddingTop: 20,
    alignItems: "center",
    width: "80%",
    marginVertical: 15
  }
});
