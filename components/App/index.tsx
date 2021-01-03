import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../Header";
import TodoItem from "../TodoItem";
import AddTodo from "../AddTodo";

export interface TodoListType {
  text: string;
  key: string
}

const App = () => {
  const [todos, setTodos] = useState<TodoListType[]>([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key));
  };

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        { text, key: Math.random().toString() },
        ...prevTodos,
      ]);
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
