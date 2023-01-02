import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dog from './Dog';
import Cat from './Cat';
import Parrot from './Parrot';
import Horse from './Horse';
import Turtle from './Turtle';
import Praditors from './Praditors';
import Birds from './Birds';
import Mammals from './Mammals';
import Raptiles from './Raptiles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='praditors' element={<Praditors />}>
            <Route path='dog' element={<Dog />} />
            <Route path='cat' element={<Cat />} />
          </Route>
          <Route path='birds' element={<Birds />}>
            <Route path='parrot' element={<Parrot />} />
          </Route>
          <Route path='mammals' element={<Mammals />}>
            <Route path='horse' element={<Horse />} />
          </Route>
          <Route path='raptiles' element={<Raptiles />}>
            <Route path='turtle' element={<Turtle />} />
          </Route>
          

        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>

);