import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoTable from './components/ToDoTable';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ToDoForm></ToDoForm>
      <ToDoTable></ToDoTable>
      <Routes>
        <Route path=""></Route>
      </Routes>
    </div>
  );
}

export default App;
