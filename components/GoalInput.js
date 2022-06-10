import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal} from 'react-native';


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
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your goal" onChangeText={goalInputHandler} value={enteredGoalText}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
       // View tag uses Flexbox by default.
       // Flexbox organizes by column by default.
      flex: 1, // 1 of X where X is the total number of flex:N of sibling classes.
      justifyContent: 'center', // Aligns items vertically.
      alignItems: 'center', // fixes Add Goal button height
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor:'gray',
      padding:16,
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '100%',
      padding: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
  });