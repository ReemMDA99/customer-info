// Import react components
import React from "react";
// Import Yup for form validation(Yup is a JavaScript schema builder for form validation.)
import * as Yup from "yup";
// Import Formik to build form in React
import { Formik, Form, Field, ErrorMessage } from 'formik';
// Import form components from react-bootstrap
import {  Button } from "react-bootstrap"; 

// create customer form with name, id, email and location properties and client side validation using Yup
const CustomerForm = (props) => {
    return (
     <div className='form-wrapper'>
        <Formik
         initialValues={{ name: '', email: '', location:'' }}
            validationSchema={Yup.object({
             name: Yup.string()
             .max(15, 'Must be 15 characters or less')
             .required('Required'),
             
             email: Yup.string()
             .email('Invalid email address')
             .required('Required'),
             location: Yup.string()
             .max(20, 'Must be 20 characters or less')
             .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                 <label htmlFor="name">Name</label>
                 <Field name="name" type="text" className="form-control" />
                 <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
         
                 <label htmlFor="email">Email Address</label>
                 <Field name="email" type="email" className="form-control"/>
                 <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
 
                 <label htmlFor="location">Location</label>
                 <Field name="location" type="text" className="form-control"/>
                 <ErrorMessage name="location" className="d-block invalid-feedback" component="span" />
         
                 <Button variant="danger" size="lg" block="block" type="submit">
                         {props.children}
                 </Button>
             </Form>
         </Formik>
     </div>
    );
 };
  // export the CustomerForm component 
 export default CustomerForm;
 