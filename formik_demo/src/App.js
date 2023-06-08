import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Input, Label } from "reactstrap";
import ModalComp from "./modalComp";

function App() {

  const [isModal, setIsModal] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('This is required field'),
    password: Yup.string().required('This is required field'),
  });

  return (
    <div>
      <h1>Formik Form app!</h1>
      <Formik
        initialValues={{ email: '', password: '', check: false }}
        validationSchema={validationSchema}
        enableReinitialize={true}
      // validateOnChange
      // validateOnBlur
      // validateOnMount
      // onSubmit={(values, { setSubmitting }) => {
      //   setTimeout(() => {
      //     alert(JSON.stringify(values, null, 2));
      //     setSubmitting(false);
      //   }, 400);
      // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          submitForm,
          validateOnBlur,
          validateOnChange,
          validateOnMount
        }) => {
          console.log("forn errors:", errors);

          return (
            <Form onSubmit={handleSubmit}>
              {/*  */}
              <Field name="email">
                {({
                  field,
                  form: { touched, errors },
                  meta,
                }) => {
                  return (
                    <>
                      <Label>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}

                      // {...field}
                      // onChange={(e) => {
                      //   field.onChange(e);
                      // }}
                      />
                    </>
                  )
                }}
              </Field>
              <ErrorMessage name="email" render={(msg) => <b>{msg}</b>} /><br />

              <label>password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors?.password && errors.password}

              <br />
              <Input type="checkbox" onChange={(e) => { handleChange(e); setIsModal(true) }} name="check" />
              <Label check >
                Check me out
              </Label>

              <ModalComp  isModal={isModal} setIsModal={setIsModal} />

              <br /><br />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  );
}

export default App;
