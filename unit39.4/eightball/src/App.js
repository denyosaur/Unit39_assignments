import './App.css';
import Eightball from "./eightball"
import answers from "./answers"

function App() {
  return (
    <div className="App">
      <Eightball answers={answers} />
    </div>
  );
}

export default App;
