import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <h1>React Search Box</h1>
        <input
          className="App__inputBox"
          placeholder="Search"
          autoFocus={true}
          type="text"
        ></input>
      </section>
    </div>
  );
}

export default App;
