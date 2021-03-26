import React from 'react';
import { ErrorMessage, useField } from 'formik';

function TextField ({ label, ...props }) {
    const [field, meta] = useField(props);
    return(
        <div className="mt-1">
            <label htmlFor={field.name}>{label}</label>
            <input
            className={`form-control input-lg ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props} autoComplete="off" />
            <span className="text-danger"><ErrorMessage name={field.name}/></span>
        </div>
    )
}

export default TextField;