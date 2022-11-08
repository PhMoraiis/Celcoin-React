import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PageRecipe from "./PageRecipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:recipeId" element={<PageRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
