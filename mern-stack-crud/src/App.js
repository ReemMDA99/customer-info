
// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

// Import React-bootstrap
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Switch,
    Route, Link } from "react-router-dom";
  
// Import other React Component

import CreateCustomer from "./Components/CreateCustomer";
import EditCustomer from "./Components/EditCustomer";
import CustomerList from "./Components/CustomerList";
import CustomerForm from "./Components/CustomerForm";
import CustomerTableRow from "./Components/CustomerTableRow";

// App Component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
