import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
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
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      {/* Scrollable area determined by parent that holds the scroll view. */}
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal, index) => (
              <View key={index} style={styles.goalItem}>
                {/* Rounded (borderRadius) corners on Text element won't work on iOS */}
                  <Text style={styles.goalText}>{goal}</Text>
              </View>
            )
          )
          }
        </ScrollView>
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
