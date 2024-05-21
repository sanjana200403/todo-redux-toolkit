import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
   
   <>
   <h1 style={{textAlign:"center"}}>Redux toolkit TODO</h1>
   <AddTodo/>
   <Todos/>
   
   </>
  );
}

export default App;
