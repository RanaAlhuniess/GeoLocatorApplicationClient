import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {AddressSearchModel} from "../models/addressSearch.model";

interface AddressFormProps {
    handleFetchApiCall: (data: AddressSearchModel) => void;
}

const AddressFormComponent: React.FC<AddressFormProps> = ({ handleFetchApiCall }) => {
    const handleSubmit = (values: AddressSearchModel, { setSubmitting }: any) => {
        // Perform API call with form values
        handleFetchApiCall(values);
        setSubmitting(false);
    };

    const validationSchema = Yup.object().shape({
        address: Yup.string().required('Address is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        sendEmail: Yup.boolean(),
    });

    return (
        <div className="address-form animated fadeInDown">
            <div className="form">
                <Formik
                    initialValues={{ address: '', email: '', sendEmail: false }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <Field type="text" name="address" placeholder="Address" />
                                <ErrorMessage name="address" component="div" className="error" />
                            </div>
                            <div>
                                <Field type="email" name="email" placeholder="Email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div>
                                <label style={{ marginRight: '10px' }}>
                                    <Field type="checkbox" name="sendEmail" />
                                    <span style={{ marginLeft: '5px' }}>Receive geolocation data via email</span>
                                </label>
                            </div>
                            <button className="btn btn-block" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddressFormComponent;
