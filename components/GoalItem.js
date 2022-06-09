import { StyleSheet, View, Text, Pressable} from 'react-native';

export function GoalItem(props) {
    return (
    <Pressable onPress={props.onDeleteItem}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </Pressable>
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