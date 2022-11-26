import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headingLogo}>
        <Text style={styles.changeColorWhite}> ✔️ toDo - Task Manager</Text>
      </View>
      <View style={styles.inputSection}>
        <TextInput placeholder="Add tasks here" placeholderTextColor={"#fff"}></TextInput>
        <Button color="#EB6440" title="ADD"></Button>
      </View>
      <View style={styles.displaySection}>
        <Text>display text section</Text>
        <Text>display another text section</Text>
        <Text>display another text section</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
    marginTop: 25,
    
  },
  headingLogo:{
    color:"#EB6440",
    justifyContent:"center",
    alignItems:"center",
    flex:1,
    paddingHorizontal:15,
    paddingVertical:8,
    
    backgroundColor:"#EB6440",
    flexDirection:"row"
  },
  inputSection: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#00005C",
    flexDirection:"row",
    flex: 1,
    borderBottomWidth: 4,
    borderColor: "#EB6440",
    marginVertical: 4
    

  },
  displaySection: {
    flex:15,
    backgroundColor: "#FFE9B1",
    alignItems: "center",
    padding: 5
    
  }
,
changeColorWhite:{
  color:"#fff",
  fontWeight:"bold"
}
});
