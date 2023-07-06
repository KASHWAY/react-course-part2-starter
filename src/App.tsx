import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import LoginProvider from './state-management/LoginProvider';
import TasksProvider from './state-management/TasksProvider';

function App() {

  return (
  <>
    <TasksProvider>
      <LoginProvider>
          <NavBar />
          <HomePage />
      </LoginProvider>
    </TasksProvider>
  </>
  )
  
}

export default App;
