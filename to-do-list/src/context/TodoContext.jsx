import { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hook/useLocalStorage.jsx';

const TodoContext = createContext();

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [filter, setFilter] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState(() => {
        // calcula o estado inicial baseado em todos e filter
        return todos.filter(todo => {
            if (filter === 'completed') return todo.completed;
            if (filter === 'pending') return !todo.completed;
            return true;
        });
    });

    useEffect(() => {
        setFilteredTodos(
            todos.filter(todo => {
                if (filter === 'completed') return todo.completed;
                if (filter === 'pending') return !todo.completed;
                return true;
            })
        );
    }, [todos, filter]);

    const addTodo = (text) => {
        if (!text.trim()) return;
        setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo, filter, setFilter, filteredTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);