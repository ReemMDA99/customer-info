// Import react components
import React from "react";
// Import Yup for form validation(Yup is a JavaScript schema builder for form validation.)
import * as Yup from "yup";
// Import Formik to build form in React
import { Formik, Form, Field, ErrorMessage } from "formik";
// Import form components from react-bootstrap
import { FormGroup } from "react-bootstrap"; 

// create customer form with name, id, email and location properties and client side validation using Yup
const CustomerForm = (props) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Mandatory Field"),
        id: Yup.number().positive("Invalid ID").required("Mandatory Field"),
        email: Yup.string().email("Invalid email address! Please try again").required("Required"),
        location: Yup.string().required("Mandatory Field"),
    });
console.log(props);
return (
    <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
            <Form>
                <FormGroup>
                    <Field name="name" type="text" className="form-control"/>
                    <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
                </FormGroup>
                <FormGroup>
                    <Field name="id" type="number" className="form-control" />
                    <ErrorMessage name="id"className="d-block invalid-feedback" component="span"/>
                </FormGroup>
                <FormGroup>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage name="email" className="d-block invalid-feedback" component="span"/>
                </FormGroup>
                <FormGroup>
                    <Field name="location" type="text" className="form-control"/>
                    <ErrorMessage name="location" className="d-block invalid-feedback" component="span"/>
                </FormGroup>
            </Form>
        </Formik>
    </div>
);

};