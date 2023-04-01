import {useContext} from 'react';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import List from './pages/list/List'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { productInputs, userInputs } from "./formSrc";
import './style/dark.scss';
import {DarkModeContext} from './context/darkModeContext'

function App() {
  const {darkMode, dispatch} = useContext(DarkModeContext)

  return (
    <div className={darkMode? "dark": ""}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single />}/>
            <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List />}/>
            <Route path=":productId" element={<Single />}/>
            <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
