import { useMemo } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList () {
    const { filteredTodos } = useTodos();

    const todoList = useMemo(() => (
        filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
    ), [filteredTodos]);

    return <ul className="list-disc mt-8">{todoList}</ul>;
};

export default TodoList;