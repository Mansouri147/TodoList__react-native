import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { observer } from "mobx-react";
import todoStore from "../context/todoStore";

const AddTodo = observer(() => {
  const [text, setText] = useState("");
  const changeHandler = (val: string) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => todoStore.addTodoItem({ text })}
        title="add todo"
        color="coral"
      />
    </View>
  );
});

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
