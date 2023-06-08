import { ErrorMessage, FieldArray, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import * as Yup from 'yup'

const ModalComp = ({ isModal, setIsModal }) => {

  let InputArray = [];
  const [state, setState] = useState([{}])

  const [fieldArray, setFieldArray] = useState()


  const digitValid = (val) => /^\d+(\.\d+)?$/.test(val)

  const greaterZero = (val) => {
    if (val > 0) {
      return true
    }
    return false
  }

  const perValidate = (val, data) => {
    // console.log("before data", data);
    if (data.parent.noIp == 1 && Number(val) !== 100) {
      return false
    }
    return true
  }

  const isDigitInt = (val) => {
    if (Number(val) % 1 === 0) {
      return true
    }
    return false
  }

  const perPositiveValidate = (val) => {
    if (val >= 0) {
      return true
    }
    return false
  }

  const greaterPrev = (val, data) => {
    const id = Number(data.path.split("[")[1].split(']')[0]);
    if (id > 0) {
      if ((Number(val) >= Number(state?.[id - 1]?.interval))) {
        return true
      } else {
        return false
      }
    } 
    else {
      return true
    }
  }

  // console.log(state, "greaterPrev", greaterPrev(3, {data: {path: "array1[1].interval"}}));

  const validationSchema = Yup.object().shape({
    percentage: Yup.string().required("This is required")
      .test("must Digit", "value must be digit", digitValid)
      .test('validPer', "Value must be 100", perValidate),
    noIp: Yup.number().required("This is required").integer().positive(),
    commonInterval: Yup.string().required("This is required")
      .test("must Digit", "value must be digit", digitValid)
      .test("NotFloat", "value must be Integer", isDigitInt)
      .test("greaterZero", "Value must be greater then 0", greaterZero),
    array1: Yup.array().required().of(Yup.object().shape({
      per: Yup.string().required("this is required")
        .test("must Digit", "value must be digit", digitValid)
        .test("greaterZero", "Value must be Positive", perPositiveValidate),
      interval: Yup.string().required("this is required")
        .test("must Digit", "value must be digit", digitValid)
        .test("NotFloat", "value must be Integer", isDigitInt)
        .test("greaterZero", "Value must be greater then 0", greaterZero)
        .test("greaterPrev", "Value must be greater then Previous", greaterPrev)
    }))
  });

  let initData = { percentage: 0, noIp: 0, commonPerCheck: true, commonIntervalCheck: true, commonInterval: '', array1: InputArray }

  return (
    <Modal
      isOpen={isModal} size="lg"
    >
      <ModalHeader toggle={() => setIsModal(false)}>
        Modal title
      </ModalHeader>
      <Formik
        initialValues={initData}
        validationSchema={validationSchema}
        // validateOnMount
        validateOnChange
        validateOnBlur
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log("form values are ::", values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
          /* and other goodies */
        }) => {

          const commonPer = values.noIp > 0 ? (100 - (values.percentage)) / (values.noIp - 1) : 0

          let remainingPer = 100 - (values.percentage);
          values.array1?.forEach((data, i) => {
            if (values.array1[i].per >= 0) {
              remainingPer = remainingPer - values.array1[i].per;
            }
          })

          return (
            <Form onSubmit={handleSubmit}>
              <ModalBody>
                <Row>
                  <Col md={6}>
                    <label>Enter percentages</label>
                  </Col>
                  <Col md={6}>
                    <input
                      name="percentage"
                      type="number"
                      placeholder='percentage value'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.percentage}
                    />
                    <ErrorMessage name="percentage" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={6}>
                    <label>Enter No of Input</label>
                  </Col>
                  <Col md={6}>
                    <input
                      name="noIp"
                      type="number"
                      value={values.noIp}
                      placeholder='No of inputs'
                      onChange={(e) => {
                        handleChange(e);
                        setFieldArray(e.target.value);
                        InputArray = e.target.value > 0 ? [...Array(parseInt(e.target.value) - 1)] : [];

                        InputArray.forEach((data, i) => {
                          InputArray[i] = { per: '', interval: 0 }
                        })

                        setFieldValue("array1", InputArray)
                      }}
                      onBlur={handleBlur}
                    />
                    <ErrorMessage name="noIp" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                  </Col>
                </Row>
                <br />

                <Row>
                  <Col md={6}>
                    <label>Common percentage Check</label>{" "}
                    <input
                      name="commonPerCheck"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.commonPerCheck}
                    />

                    {values.commonPerCheck &&
                      <Row style={{ marginTop: '20px' }}>
                        <Col md={4}>
                          <label>Common percentage</label>{" "}
                        </Col>
                        <Col md={8}>
                          <input
                            style={{ width: '100%' }}
                            name="commonPer"
                            type="number"
                            placeholder='Common percentage'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={true}
                            value={commonPer.toFixed(2)}
                          />
                        </Col>
                      </Row>
                    }
                  </Col>

                  <Col md={6}>
                    <label>Common interval Check</label>{" "}
                    <input
                      name="commonIntervalCheck"
                      type="checkbox"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      checked={values.commonIntervalCheck}
                    />

                    {values.commonIntervalCheck &&
                      <Row style={{ marginTop: '20px' }}>
                        <Col md={4}>
                          <label>Common interval</label>{" "}
                        </Col>
                        <Col md={8}>
                          <input
                            style={{ width: '100%' }}
                            name="commonInterval"
                            type="number"
                            placeholder='Common interval'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.commonInterval}
                          />
                          <ErrorMessage name="commonInterval" render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />

                        </Col>
                      </Row>
                    }
                  </Col>

                  <br />
                  <b>Remaining Pecentages are {remainingPer}</b>
                  <br />


                  <FieldArray
                    name="array1"
                    validateOnChange
                    render={helpers => {
                      return (
                        values.array1.map((data, index) => (
                          <div style={{ backgroundColor: 'lightgray', marginTop: '20px' }}>
                            <Row key={index}>
                              {!values.commonPerCheck && <Col md={6}>
                                <input
                                  name={`array1[${index}].per`}
                                  placeholder="percentage"
                                  type="number"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.array1[index]?.per ?? ''}
                                />
                                <ErrorMessage name={`array1[${index}].per`} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />
                              </Col>
                              }

                              {!values.commonIntervalCheck &&
                                <Col md={6}>
                                  <input
                                    name={`array1[${index}].interval`}
                                    placeholder="interval"
                                    type={'number'}
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                      handleChange(e);
                                      let data = [...state];
                                      data[index] = { interval: e.target.value }
                                      setState([...data])
                                    }}
                                    value={values.array1[index]?.interval ?? ''}
                                  />
                                  <ErrorMessage name={`array1[${index}].interval`} render={(msg) => <div style={{ color: 'red' }}>{msg}</div>} />

                                </Col>
                              }
                            </Row>
                          </div>
                        ))
                      )
                    }}
                  />
                </Row>
                <br />

                {/* <div style={{ color: 'red' }}>{(!values.commonPerCheck && remainingPer !== 0) ? 'Percentrage must be 100' : ''}</div> */}
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  color="primary"
                >
                  Save
                </Button>
                {' '}
                <Button onClick={() => setIsModal(false)}>
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          )
        }}
      </Formik>
    </Modal>
  )
}

export default ModalComp