import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your goal" />
        <Button title="Add goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
     // View tag uses Flexbox by default.
     // Flexbox organizes by column by default.
    flex: 1, // 1 of X where X is the total number of flex:N.
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
    flex: 4,
  }

});
