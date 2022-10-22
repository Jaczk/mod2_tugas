import TextInput from "./components/textinput";
import "./App.css";
import ReactJSX from "./JSX/reactjsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />

        <div className="Components">
          <form action="">
            <TextInput border="black" placeholder="NIM" />
          </form>
        </div>
        <div className="tampil">
          
        </div>
      </header>
    </div>
  );
}

export default App;
