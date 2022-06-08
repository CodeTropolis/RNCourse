import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // React Native will populate the enteredText param from onChangeText.
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
    console.log(`@CodeTropolis ~ addGoalHandler ~ enteredGoalText`, enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText]); // This works but below is best practice when new state depends on old state.
    // React populates currentCourseGoals.
    // Wrap enteredGoalText in an object with a key prop (or use keyExtractor if using diff prop name) to satisfy FlatList keys.
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      {/* Scrollable area determined by parent that holds the scroll view. */}
      {/* Scroll always renders all items regardless if item is on screen. */}
      {/* FlatList lazy loads items */}
      <View style={styles.goalsContainer}>
        {/* FlatList populates renderItem param not only with our items but also meta data. */}
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id} />
      </View>
    </View>
  );
}
// Styles do not cascade or inherit in React Native.
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
     // View tag uses Flexbox by default.
     // Flexbox organizes by column by default.
    flex: 1, // 1 of X where X is the total number of flex:N of sibling classes.
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // fixes Add Goal button height
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor:'gray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalText: {color:'white'},
  goalItem: {
    margin: 8,
    borderRadius: 8,
    padding: 8,
    backgroundColor: 'purple',
  }

});
