import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';
import './styles/App.css';

function App() {
  return (
    <TodoProvider className="app-container overscroll-y-auto md:overscroll-contain">
      <div className="container mx-auto p-2 md:p-4 flex flex-col">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold mb-5 md:mb-6 lg:mb-10">Lista de Tarefas</h1>
        <TodoFilters />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;