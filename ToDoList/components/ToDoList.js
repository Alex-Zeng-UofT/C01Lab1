import React, { useState } from 'react'
import { View, Text, Button, StyleSheet} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import AddTask from './AddTask'

const ToDoList = ({ todoList }) => {
    // set the state variable with intials values being the prop list
    const [toDos, setToDos] = useState(todoList.map((task) => ({ id: uuidv4(), title: task})));

    // remove a todo task by only keeping tasks with different ids
    const removeToDo = (id) => {
        setToDos(prevTodos => {
            return prevTodos.filter(task => task.id !== id);
        });
    };

    // add a todo the the current list with given newTitle
    const addToDo = (newTitle) => {
        const newTask = {id: uuidv4(), title: newTitle};
        setToDos((prevTasks) => [...prevTasks, newTask]);
    }

    return (
        // styles given in handout
        <View style={styles.todoListContainer}>
            {toDos.map((task) => (
                <View key={task.id} style={styles.todoItem}>
                    <Text>{task.title}</Text>
                    <Button title='Remove' onPress={() => removeToDo(task.id)}/>
                </View>
            ))}
            <AddTask onAddTask={addToDo}></AddTask>
        </View>
    );
};

// set default prop to be empty array
ToDoList.defaultProps = {
    todoList: []
};

// styles provided in handout
const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;