import { createRoot } from 'react-dom/client';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Main from './components/main';
import Applications from './components/applications';
import Optimizations from './components/optimizations';
import Settings from './components/settings';
import './styles/styles.css';

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/applications" element={<Applications />}/>
        <Route path="/optimizations" element={<Optimizations/>}/>
        <Route path="/settings" element={<Settings />}/>
      </Routes>
    </HashRouter>
);