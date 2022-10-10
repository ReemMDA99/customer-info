//Display a single customer by returning table row which is responsible to display customer data
// Import react components
import React from "react";
// Import button from bootstrap
import { Button } from "react-bootstrap";
// import link from react-router-dom
import { Link } from "react-router-dom";
import axios from "axios";

// create customer-table-row component
const CustomerTableRow = (props) => {
  const { name, _id, email, location } = props.obj;
  // add delete customer by id functionality
  const deleteCustomer = () => {
    axios
      .delete(
        "http://localhost:4000/customers/delete-customer/" + _id)
      .then((response) => {
        if (response.status === 200) {
          alert("Customer successfully deleted");
          window.location.reload();
        } else 
        Promise.reject();
      })
      // if error catch error
      .catch((error) => alert("Something went wrong"));
  };
  
  //Return customer  table row
  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>{email}</td>
      <td>{location}</td>
      <td>
        {/* edit customer by id */}
        <Link className="edit-link" 
          to={"/edit-customer/" + _id}>
          Edit
        </Link>
        {/* Delete customer button */}
        <Button onClick={deleteCustomer} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
//export customerTableRow component
export default CustomerTableRow;