import { useState } from 'react'
import { Todos } from './components/Todos'
import { FilterValue, TodoTitle, type TodoId, type Todo as TodoType } from './types';
import { TODO_FILTERS } from './constants';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn Vite',
    completed: false
  }
]

function App(): JSX.Element {

  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  }

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  }

  const activeCount = todos.filter(todo => !todo.completed).length;

  const filteredTodos = todos.filter(todo => {
    switch (filterSelected) {
      case TODO_FILTERS.ACTIVE:
        return !todo.completed;
      case TODO_FILTERS.COMPLETED:
        return todo.completed;
      default:
        return todo;
    }
  })

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos);
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTaskTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTaskTodo]
    setTodos(newTodos);
  }

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo}   />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted} />
      <Footer
        activeCount={activeCount}
        completedCount={todos.length - activeCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}

export default App
