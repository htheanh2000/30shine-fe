import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import * as Pages from 'pages'
import Header from 'components/shares/header';
// import Modal from 'components/shares/modal';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    {/* <Modal/> */}
      <Routes>
          <Route index element={<Pages.Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
