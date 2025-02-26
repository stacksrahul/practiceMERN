//Import Components
import {Fragment} from 'react';

// Declare App Title Component
function AppTitle(){
  return(
    <h1>To Do List App</h1>
  );
}

// Sample Button Component
function Button(){
  return(
    <>
      <input type='submit'>Click Me</input>
      <Click />
    </>
  );
}

function Click() {
  return(
    <>
      {/* <input type='text'> */}
    </>
  )
}

function TaskList() {
  return(
    <Fragment>
      <ol className='listbox'>
        <li>Complete React by today (Sunday)</li>
        <li>Task 2</li>
      </ol>
    </Fragment>
  )
}

// Main Function of my app
export default function MyApp() {
  return (
    <>
      <AppTitle />
      <Button />
      <TaskList />
    </>
  );
}






























// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
