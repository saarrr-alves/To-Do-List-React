import { memo } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

function TodoList () {
    const { filteredTodos } = useTodos();

    const todoList = filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);

    return <ul className="list-disc mt-8">{todoList}</ul>;
};

export default memo(TodoList);