import { useReducer } from 'react';
import './App.css';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/contexts/tasksContext';
import tasksReducer from './state-management/reducers/tasksReducer';
import loginReducer from './state-management/reducers/loginReducer';
import LoginContext from './state-management/contexts/loginContext';
import LoginProvider from './state-management/LoginProvider';

function App() {

  const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
  const [user, loginDispatch] = useReducer(loginReducer, '');

  return (
  <>
    <LoginProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
            <NavBar />
            <HomePage />
        </TasksContext.Provider>
    </LoginProvider>
     
    
  </>
  )
  
}

export default App;
