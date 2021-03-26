import React, { Component } from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';

class EmployeeForm extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            apiResponse:" ",
        };
    }
    callAPI(values){
        var empData ={
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            mobileNumber: values.mobileNumber,

        }
        console.log(empData);
        // axios.post('http://localhost:3001/addNewUser',empData);

        fetch('http://localhost:3001/addNewUser', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(empData)
            }).then(res => res.json())
            .then(res => alert(res));
    }

    render(){
        const validate = Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(2, 'Must be greater than 2 characters')
                .required('Required'),
            lastName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(2, 'Must be greater than 2 characters')
                .required('Required'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Required'),
            mobileNumber: Yup.string()
                .max(10,'Mobile number must be 10 digit long')
                .min(10,'Mobile number must be 10 digit long')
                .required('Required'),
        })
        return(
            <Formik
                    initialValues = {{
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobileNumber: '',
                }}
                validationSchema={validate}
                onSubmit={values => {
                    this.callAPI(values);
                }}
            >
                {formik =>(
                    <div>
                        <h1>Employee Details</h1>
                        <Form onSubmit={formik.handleSubmit}>
                            <TextField label="First Name" name="firstName" type="text" value={this.state.firstName}/>
                            <TextField label="Last Name" name="lastName" type="text" />
                            <TextField label="Email" name="email" type="text" />
                            <TextField label="Mobile Number" name="mobileNumber" type="text" />
                            <div className="form-group mt-2">
                                <button className="btn btn-primary" type="submit">Register</button>
                                <button className="btn btn-primary floar-right ml-3" type="reset">Reset</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        );
    }
}
export default EmployeeForm;