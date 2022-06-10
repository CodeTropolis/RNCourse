import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState } from 'react';
// Start components with a capital letter.
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText){
    // setCourseGoals([...courseGoals, enteredGoalText]); // This works but below is best practice when new state depends on old state.
    // React populates currentCourseGoals.
    // Wrap enteredGoalText in an object with a key prop (or use keyExtractor if using diff prop name) to satisfy FlatList keys.
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.id !== id)); 
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* Scrollable area determined by parent that holds the scroll view. */}
      {/* Scroll always renders all items regardless if item is on screen. */}
      {/* FlatList lazy loads items */}
      <View style={styles.goalsContainer}>
        {/* FlatList populates renderItem param not items and meta data. */}
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem 
            text={itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}
            />
          );
          
        }}
        keyExtractor={item => item.id} />
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
  goalsContainer: {
    flex: 5,
  },
});
