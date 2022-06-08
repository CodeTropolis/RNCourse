import { StyleSheet, View, Text} from 'react-native';

export function GoalItem(props) {
    return (
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    goalText: {color:'white'},
    goalItem: {
      margin: 8,
      borderRadius: 8,
      padding: 8,
      backgroundColor: 'purple',
    }
});