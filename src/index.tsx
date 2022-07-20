import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

////////////////Pages/////////////////////////
import App from './pages/Home/App';
import Detailed from './pages/Detailed/Info';

const rootElement: any = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:pokemon/detailed" element={<Detailed />} />
    </Routes>
  </Router>,
);

reportWebVitals();
