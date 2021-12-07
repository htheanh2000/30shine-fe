import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import * as Pages from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Pages.Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
