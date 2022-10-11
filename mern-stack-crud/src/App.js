
// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";

// Import React-bootstrap
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
  
// Import other React Component

import CreateCustomer from "./Components/CreateCustomer";
import EditCustomer from "./Components/EditCustomer";
import CustomerList from "./Components/CustomerList";
import CustomerForm from "./Components/CustomerForm";
import CustomerTableRow from "./Components/CustomerTableRow";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-customer"}
                className="nav-link">
                  Customer Information App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-customer"} 
                    className="nav-link">
                    Create Customer
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/customer-list"} 
                    className="nav-link">
                    Customer List
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/"
                  component={CreateCustomer}/>
                  <Route path="/CreateCustomer"
                  component={CreateCustomer}/>
                  <Route path="/EditCustomer/:id"
                  component={EditCustomer}/>
                  <Route path="/CustomerList"
                  component={CustomerList}/>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
    
  );
};

export default App;
