import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Main } from './components/main';
import { Settings } from './components/settings';
import './styles/styles.css';

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/settings" element={<Settings />}/>
    </Routes>
  </BrowserRouter>
);