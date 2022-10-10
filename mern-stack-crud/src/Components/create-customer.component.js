// Create customer Component to add new customers

// Import modules
import React from "react";
// import react hooks
import { useState, useEffect } from "react";
// install and import axios(It is a promise base HTTP Client and use for network request.)
import axios from 'axios';
// import customer form component
import CustomerForm from "./CustomerForm";

//create customer component
const CreateCustomer = () => {
    const [formValues, setFormValues] =
    useState({
        name:'', id:'', email:'', location:''
    });
    
    // onSubmit event handler
    const onSubmit = customerObject => {
        axios.post(
            'http://localhost:4000/customers/create-customer', customerObject)
            // catch response
            .then(response => {
                if (response.status === 200)
                alert('Successfully created Customer')
                else
                Promise.reject()
            })
            // if error, catch error
            .catch 
            (error => alert('Something went wrong! Try again')
        )
    }
    // Return customer form
  return(
    <CustomerForm 
        initialValues={formValues} 
        onSubmit={onSubmit} 
        // The enableReinitialize prop resets form only if initialValues is changed
        enableReinitialize>
      Create Customer
    </CustomerForm>
  )
}


//export this component
export default CreateCustomer