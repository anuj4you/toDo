import { StatusBar } from "expo-status-bar";
import { startTransition, useState } from "react";
import {
  AppState,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function App() {
  //function to get current text input
  function currentText(textTyped) {
    setCurrentText(textTyped);
  }

  //function to add current text to list
  function taskList() {
    listHandler((finalList) => [...list, text]);
  }

  //state var for current input text
  const [text, setCurrentText] = useState("");

  //state variable for updated task list to be displayed
  const [list, listHandler] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.headingMain}>
        <View style={styles.headingLogo}>
          <Text style={styles.changeColorWhite}> ✔️ toDo - Task Manager</Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            placeholder="Add tasks here"
            placeholderTextColor={"#fff"}
            style={styles.textInput}
            onChangeText={currentText}
          ></TextInput>
          <Button color="#EB6440" title="ADD" onPress={taskList}></Button>
        </View>
      </View>
      <View style={styles.displaySection}>
        <View style={styles.displayText}>
          {list.map((task) => (
            <Text
              key={task}
              style={[styles.displayEachText, styles.changeColorWhite]}
            >
              {task}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

//styles below this..
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    marginTop: 25,
  },
  headingMain: {
    flex: 2,
  },
  headingLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,

    backgroundColor: "#EB6440",
  },
  inputSection: {
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 2,
    backgroundColor: "#497174",
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
    borderBottomWidth: 4,
    borderColor: "#EB6440",
    marginVertical: 4,
  },
  displaySection: {
    flex: 5,
    backgroundColor: "#D6E4E5",
    alignItems: "center",
    padding: 8,
  },
  displayText: {
    padding: 6,
    margin: 5,

    width: "100%",
    color: "#fff",
  },
  displayEachText: {
    backgroundColor: "#497174",

    borderRadius: 6,
    padding: 6,
    margin: 5,
    borderBottomWidth: 2,
    borderColor: "#EB6440",
    width: "95%",
    color: "#fff",
  },
  textInput: {
    width: "80%",
    color: "#fff",
    fontSize:20,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    padding: 10,
  },

  changeColorWhite: {
    color: "#fff",
    fontWeight: "bold",
    fontSize:20
  },
});
