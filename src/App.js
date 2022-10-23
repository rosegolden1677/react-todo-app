import './App.css';
import Header from './components/header.js/Header';
import List from './components/list/List';

function App() {
  return (
    <main>
      <div className='todo-container'>
        <Header />
        <List />
      </div>
    </main>
  );
}

export default App;
