import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Task from './components/Task';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Task/>
  </React.StrictMode>,
)
