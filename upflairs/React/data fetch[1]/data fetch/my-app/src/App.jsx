import './App.css';
import Datafetch from './Datafetch';
import DataPost from './DataPost';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Product shop</h1>
      <DataPost />
      <hr />
      <Datafetch />
    </div>
  );
}

export default App;
