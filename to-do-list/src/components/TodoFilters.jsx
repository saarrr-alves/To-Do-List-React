import { useTodos } from '../context/TodoContext';
import '../styles/TodoFilters.css';

function TodoFilters() {
    const { filter, setFilter } = useTodos();

    return (
        <div className="flex gap-2 justify-center my-4">
            {['all', 'completed', 'pending'].map(f => (
            <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-2 lg:px-4 py-1 rounded-lg text-xs md:text-sm lg:text-base font-bold transition-colors
                    ${filter === f 
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
            >
                {f === 'all' ? 'Todas' : f === 'completed' ? 'Concluídas' : 'Pendentes'}
            </button>
            ))}
        </div>
    );
};

export default TodoFilters;