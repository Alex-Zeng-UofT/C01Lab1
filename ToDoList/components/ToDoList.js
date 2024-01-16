import React, { useState } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

const ToDoList = ({ todoList }) => {
    const [tasks, setTasks] = useState(todoList.map((task) => ({ id: uuidv4(), todo: task})));

    const removeTask = (id) => {
        setTasks(prevTodos => {
            return prevTodos.filter(task => task.id !== id);
        });
    };

    return (
        <View>
            {tasks.map((task) => (
                <View key={task.id}>
                    <Text>{task.todo}</Text>
                    <Button title='Remove' onPress={() => removeTask(task.id)}/>
                </View>
            ))}
        </View>
    );
};

export default ToDoList;