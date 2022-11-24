import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  
  function convertToUpperCase() {
    setText(text.toUpperCase());
  }
  return (
    <div className="App">
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Digite aí" rows={15}></textarea>
      <div className="mirror">
        <h1>Código</h1>
        <p onChange={convertToUpperCase}>{text}</p>
      </div>
    </div>
  );
}

export default App;
