import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{3}-\d{4}$/,
      "Invalid phone number format (e.g., 459-121-5647)"
    )
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        const newContact = { ...values };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.contactFormInputWrapper}>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className={css.contactFormInput} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.contactFormError}
          />

          <label htmlFor="number">Number</label>
          <Field name="number" type="text" className={css.contactFormInput} />
          <ErrorMessage
            name="number"
            component="span"
            className={css.contactFormError}
          />
        </div>

        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
