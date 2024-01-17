import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    // adds task title using prop funtion if title not empty after trim
    // and sets the state variable back to an empty string
    const handleAddTask = () => {
        if (title.trim() !== '') {
          onAddTask(title);
          setTitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                placeholder="Enter Todo Here"
                value={title}
                onChangeText={(text) => setTitle(text)}
                keyboardType="default"
                returnKeyType="done"
                style={styles.input}
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    )
};

// styles provided in handout
const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;