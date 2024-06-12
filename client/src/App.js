import { BrowserRouter, Routes, Route } from "react-router-dom";
import Parent from "./components/Parent";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/parent" element={<Parent />} />
    </Routes>
  </BrowserRouter>
);

export default App;
