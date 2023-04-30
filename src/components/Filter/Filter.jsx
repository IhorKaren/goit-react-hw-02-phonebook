import { Formik, Field, Form } from 'formik';

const FilterForm = ({ title, onChange }) => {
  const initialValues = {
    filter: '',
  };

  return (
    <Formik initialValues={initialValues}>
      <Form>
        <label htmlFor="filter">{title}</label>
        <Field
          type="text"
          id="filter"
          name="filter"
          onChange={onChange}
          value={onChange.filter}
        />
      </Form>
    </Formik>
  );
};

export default FilterForm;
