// Edit-customer component for updating customer data

// Import modules
import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import CustomerForm from "./CustomerForm";

// edit customer component
const EditCustomer = (props) => {
    const[formValues, setFormValues] = 
    useState({
        name:'', id:'', email:'', location:''
    });
    
    // onSubmit event handler
    const onSubmit = (customerObject) => {
        axios.put(
            "http://localhost:4000/customers/update-customer/" +
            props.match.params.id,
            customerObject
        )
        // catch response
        .then((response) => {
            if(response.status === 200) {
                alert("Successfully updated customer's info");
                props.history.push("/customer-list");

            } else 
                Promise.reject();
        })
        // if error, catch error
        .catch((error) => alert("Something went wrong"));
    };
    // Load data from server and reinitialize customer form
    useEffect(() => {
        axios.get(
            "http://localhost:4000/customers/update-customer/" +
            props.match.params.id
        )
        .then((response) => {
            const { name , id, email, location } = 
            response.data;
            setFormValues({ name , id, email, location });
        })
        .catch((error) => console.log(error));
    }, []);

    //Return customer form
    return(
        <CustomerForm 
            initialValues={formValues} 
            onSubmit={onSubmit} 
            // The enableReinitialize prop resets form only if initialValues is changed
            enableReinitialize>
          Update Customer
        </CustomerForm>
    );

};

// Export edit-customer Component
export default EditCustomer;