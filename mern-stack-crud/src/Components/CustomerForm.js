// Import react components
import React from "react";
// Import Yup for form validation(Yup is a JavaScript schema builder for form validation.)
import * as Yup from "yup";
// Import Formik to build form in React
import { Formik, Form, Field, ErrorMessage } from "formik";
// Import form components from react-bootstrap
import { FormGroup, FormControl, Button } from "react-bootstrap"; 

// create customer form with name, id, email and location properties and client side validation using Yup
const CustomerForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Mandatory Field"),
        // id: Yup.number().positive("Invalid ID").required("Mandatory Field"),
        email: Yup.string().email("Invalid email address! Please try again").required("Required"),
        location: Yup.string().required("Mandatory Field"),
    });
console.log(props);
return (
    <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
                {/* form group for name field */}
                <FormGroup>
                    <Field name="name" type="text" className="form-control"/>
                    <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
                </FormGroup>
                
                {/* form group for email field */}
                <FormGroup>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email" className="d-block invalid-feedback" component="span"/>
                </FormGroup>
                {/* form group for location field */}
                <FormGroup>
                    <Field name="location" type="text" className="form-control"/>
                    <ErrorMessage name="location" className="d-block invalid-feedback" component="span"/>
                </FormGroup>
                {/* Add button by importing from react bootstrap */}
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