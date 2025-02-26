
function App() {

  const myName = "my name is John Doe";

  const multiply = (a, b) => a *b;

  const specialClass = "special-class";

  return <div>
    <p>
      {2 + 2}
    </p>
    <h1>
      {myName}
    </h1>
    <p>My Friend List: {["Alex", "John", "Waheed", "Jorden"]}</p>
    <p>2 * 2 = {multiply(2, 2)}</p>
    <p className={specialClass}>This is special class</p>
  </div>
}

export default App;