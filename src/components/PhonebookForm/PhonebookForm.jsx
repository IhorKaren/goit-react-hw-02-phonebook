import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  number: Yup.string()
    .required('Number is required')
    .min(7, 'Number must be at least 7 digits')
    .max(16, 'Number must not exceed 16 digits'),
});

const PhonebookForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number); // додати новий контакт до state
        resetForm(); // очистити форму
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
          <label htmlFor="number">Number:</label>
          <Field type="tel" id="number" name="number" />
          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default PhonebookForm;
