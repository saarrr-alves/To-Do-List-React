import { useMemo } from 'react';
import { useTodos } from '../context/TodoContext';
import '../styles/TodoFilters.css';

function TodoFilters() {
    const { filter, setFilter } = useTodos();

    const filters = useMemo(() => ['all', 'completed', 'pending'], []);

    const buttons = useMemo(
        () =>
            filters.map((f) => {
                const label = f === 'all' ? 'Todas' : f === 'completed' ? 'Concluídas' : 'Pendentes';
                const active = filter === f;

                return (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-2 lg:px-4 py-1 rounded-lg text-xs md:text-sm lg:text-base font-bold transition-colors
                            ${active
                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {label}
                    </button>
                );
            }),
        [filters, filter, setFilter]
    );

    return <div className="flex gap-2 justify-center my-4">{buttons}</div>;
}

export default TodoFilters;