import { makeObservable, observable, action } from "mobx";
import { nanoid } from "nanoid";
import { Alert } from "react-native";

export interface TodoType {
  text: string;
  key: string;
}

class createTodoStore {
  todos: TodoType[] = [];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodoItem: action,
      deleteItem: action,
    });
  }

  addTodoItem = ({ text }: { text: string }): void => {
    if (text.length > 3) {
      this.todos = [
        {
          key: nanoid(),
          text,
        },
        ...this.todos,
      ];
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  deleteItem = (key: string) => {
    this.todos = this.todos.filter((value: TodoType) => value.key !== key);
  };
}

const todoStore = new createTodoStore();

export default todoStore;
