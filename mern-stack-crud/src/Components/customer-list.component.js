// Build a component to display the customers details in a table.
//Import react components
import React from "react";
import  { useState, useEffect } from "react";
import axios from "axios";
// Import table from react-bootstrap library
import { Table } from "react-bootstrap";
import CustomerTableRow from "./CustomerTableRow";
 
// create customer-list table component
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/customers/")
      .then(({ data }) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return customers.map((response, i) => {
      return <CustomerTableRow obj={response} key={i} />;
    });
  };
  //Return customer form table
  return (
    <div className="table-wrapper">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>email</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};

// Export CustomerList Component
export default CustomerList;