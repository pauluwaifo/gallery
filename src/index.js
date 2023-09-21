import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import 'react-bootstrap'
import 'react-bootstrap-icons'
import { DndProvider } from "react-dnd";
import {TouchBackend} from "react-dnd-touch-backend";
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <DndProvider backend={window.TouchEvent ? TouchBackend : HTML5Backend} options={{ enableMouseEvents: true }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DndProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
