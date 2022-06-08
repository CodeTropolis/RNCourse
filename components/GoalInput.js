import { useState } from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';


export function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    // React Native will populate the enteredText param from onChangeText.
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText); // Pass enteredGoalText to the parent component.
        setEnteredGoalText('');
    }
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} value={enteredGoalText}/>
            <Button title="Add goal" onPress={addGoalHandler} />
      </View>
    );
}


const styles = StyleSheet.create({
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
  });