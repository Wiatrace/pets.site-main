import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Lk from './pages/lk';
import Enter from './pages/enter'
import Registr from './pages/registr'
import Dobavobjav from './pages/dobavobjav'
import Vseobjav from './pages/vseobjav';
import Cardop from './pages/cardop';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/registration'} element={<Registr/>}/>
        <Route path={'/login'} element={<Enter/>}/>
        <Route path={'/lk'} element={<Lk/>}/>
        <Route path={'/search'} element={<Vseobjav/>}/>
        <Route path={'/addobjav'} element={<Dobavobjav/>}/>
        <Route path={'/card'} element={<Cardop/>}/>
      </Routes>
    </div>
  );
}
export default App;
