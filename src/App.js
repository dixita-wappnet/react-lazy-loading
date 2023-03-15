import './Styles/App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Layouts/Navbar';

const Main = lazy(()=>
  wait(1500).then(()=> import('./Components/components/Main')));
const Login = lazy(()=>
  wait(1500).then(() => import('./Components/components/Login')));
const CreatePost = lazy(()=>
  wait(1500).then(() => import('./Components/components/CreatePost')));


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Suspense fallback={<h1>Loading.....</h1>}>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/createpost' element={<CreatePost/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
      
    </div>
  );
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  })
}

export default App;
