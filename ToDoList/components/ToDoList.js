import React, { useState } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import AddTask from './AddTask'

const ToDoList = ({ todoList }) => {
    // set the state variable with intials values being the prop list
    const [tasks, setTasks] = useState(todoList.map((task) => ({ id: uuidv4(), todo: task})));

    // remove a todo task by only keeping tasks with different ids
    const removeTask = (id) => {
        setTasks(prevTodos => {
            return prevTodos.filter(task => task.id !== id);
        });
    };

    const AddTodo = (task) => {
        const newTask = {id: uuidv4(), todo: task};
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    return (
        <View>
            {tasks.map((task) => (
                <View key={task.id}>
                    <Text>{task.todo}</Text>
                    <Button title='Remove' onPress={() => removeTask(task.id)}/>
                </View>
            ))}
            <AddTask onAddTask={AddTodo}></AddTask>
        </View>
    );
};

export default ToDoList;