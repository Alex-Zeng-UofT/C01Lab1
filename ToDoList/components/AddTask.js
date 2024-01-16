import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet} from 'react-native'

const AddTask = ({ onAddTask }) => {
    const [initialInput, setInitialInput] = useState('');

    const handleAddTask = () => {
        if (initialInput.trim() !== '') {
          onAddTask(initialInput);
          setInitialInput('');
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Enter Todo Here"
                value={initialInput}
                onChangeText={(text) => setInitialInput(text)}
                keyboardType="default"
                returnKeyType="done"
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    )
};

export default AddTask;