import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import todoStore from "../context/todoStore";
import TodoItem from "../TodoItem";

const List = observer(() => {
  return (
    <View style={styles.list}>
      <FlatList
        data={todoStore.todos}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
    </View>
  );
});

export default List;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 20,
  },
});
