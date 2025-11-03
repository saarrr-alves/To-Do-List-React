import { useEffect } from 'react';
import { useTodos } from '../context/TodoContext';
import { useInput } from '../hook/useInput';
import '../styles/TodoForm.css';

function TodoForm() {
    const { addTodo } = useTodos();
    const { valor, onChange, limpar } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!valor) return;
        addTodo(valor);
        limpar();
    };

    useEffect(() => {
        console.log('Form renderizado!');
    }, []);

    return (
        <form
            onSubmit={handleSubmit}
            className="flex my-4 items-center rounded-md lg:rounded-lg bg-white outline-1 -outline-offset-1 outline-purple-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-purple-600"
        >
            <input
                type="text"
                value={valor}
                onChange={onChange}
                placeholder="Adicione uma tarefa..."
                className="grow px-2 md:px-3 lg:px-4 pr-5 pl-4 text-xs md:text-sm lg:text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
            />
            <button
                type="submit"
                className="flex gap-1 md:gap-2 lg:gap-2 items-center rounded-md lg:rounded-lg bg-purple-600 font-bold text-xs md:text-sm lg:text-base text-white py-1 md:py-2 lg:py-2 px-2 md:px-4 lg:px-4 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                Adicionar
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 lg:size-6 stroke-2"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                </svg>
            </button>
        </form>
    );
}

export default TodoForm;