import React, { useState, useRef } from "react";
import {
  Input,
  Button,
  Checkbox,
  FormItem,
  FormContainer,
  toast,
} from "components/ui";
import { Dialog } from "components/ui";
import { Upload } from "components/ui";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Select } from "components/ui";
import { useNavigate } from "react-router-dom";
import Notification from "components/template/Notification";
import { base } from "@tailwindcss/typography/src/styles";
import { apiPostProduct } from "../../../services/SalesService";

const UsageUnite = [
  { value: "MTS", label: "MTS" },
  { value: "Tons", label: "Tons" },
  { value: "Kg", label: "Number" },
  { value: "Number", label: "Number" },
];
const StatusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];
const PuductCategory = [
  { value: "Breqettes", label: "Breqettes" },
  { value: "pellets", label: "pellets" },
  { value: "Loose Biomas", label: "Loose Biomas" },
  { value: "Cashew DOC", label: "Cashew DOC" },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name Is Required"),
  Discription: Yup.string().required("Discription is Required"),
  GST: Yup.number().required().positive().integer().required("GST is Required"),
  HSNCode: Yup.number()
    .required()
    .positive()
    .integer()
    .required("HSN Code is Required"),
  GSTINNo: Yup.number()
    .required()
    .positive()
    .integer()
    .required("GSTIN No is Required"),
  product: Yup.string().required("Product is required"),
  unit: Yup.string().required("Unit is required"),
  status: Yup.string().required("status is required"),
});
const Addnewproduct = () => {
  const [dialogIsOpen, setIsOpen] = useState(true);
  const [base64String, setBase64] = useState("");
  const openDialog = () => {
    setIsOpen(true);
  };

  const onDialogClose = (e) => {
    console.log("onDialogClose", e);
    setIsOpen(false);
    navigate("/ProductManagement");
  };

  const onDialogOk = (e) => {
    console.log("onDialogOk", e);
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    toast.push(
      <Notification title={"Successfuly added"} type="success" duration={2500}>
        Product successfuly added
      </Notification>,
      {
        placement: "top-center",
      }
    );
    navigate("/app/sales/product-list");
  };

  const handleDiscard = () => {
    navigate("/ProductManagement");
  };

  const getImgValue = (base64File) => {
    console.log(base64File);
    setBase64(base64File);
  };
  const handleSubmit = (values) => {
    const { Discription, GST, GSTINNo, HSNCode, product, unit, name, status } =
      values;
    console.log(values, "values");
    apiPostProduct({
      Discription,
      GST,
      GSTINNo,
      HSNCode,
      base64String,
      product,
      unit,
      //   : unit.value,
      name,
      status,
      //   : status.value,
    });
    setIsOpen(false);
    navigate("/ProductManagement");
    toast.push(
      <Notification title={"Successfuly added"} type="success" duration={2500}>
        Product successfuly added
      </Notification>,
      {
        placement: "top-center",
      }
    );
  };
  //   const product = (PuductCategory, values) => {
  //     console.log(
  //       PuductCategory.filter((category) => category.value === values.product)[0],
  //       "cate"
  //     );
  //     return PuductCategory.map(
  //       (category) => category.value === values.product
  //     )[0];
  //   };

  const obj = { value: "Breqettes", label: "Breqettes" };
  return (
    <Dialog
      isOpen={dialogIsOpen}
      onClose={onDialogClose}
      onRequestClose={onDialogClose}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      width={"75%"}
      height={"100%"}
    >
      <div>
        {/* //className="flex flex-col h-full justify-between" */}
        <div>
          {/* className="max-h-96 overflow-y-auto" */}
          <div className="mb-4">
            <h4>Add New Product(Item)</h4>
          </div>
          <Formik
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
            initialValues={{
              name: "",
              HSNCode: "",
              Discription: "",
              GST: "",
              name: "",
              GSTINNo: "",
              status: "",
              unit: "",
              product: "",
            }}
          >
            {({ touched, errors, resetForm, values }) => (
              <div className="gap-8 columns-2">
                <Form>
                  <FormContainer>
                    <div>
                      <FormItem
                        label="Product Category"
                        invalid={errors.product && touched.product}
                        errorMessage={errors.product}
                      >
                        <Field name="product">
                          {({ field, form }) => (
                            <Select
                              placeholder="Please Select"
                              options={PuductCategory}
                              field={field.value}
                              form={form}
                              value={PuductCategory.filter(
                                (category) => category.value === values.product
                              )}
                              onChange={(option) => {
                                form.setFieldValue(field.name, option.value);
                                console.log(option, "option");
                              }}
                              //value={values.product}
                              // onChange={(option) =>
                              //   form.setFieldValue(field.name, option)
                              // }
                            />
                          )}
                        </Field>
                      </FormItem>
                      <FormItem
                        label="HSN Code"
                        invalid={errors.HSNCode && touched.HSNCode}
                        errorMessage={errors.HSNCode}
                      >
                        <Field
                          type="number"
                          autoComplete="off"
                          name="HSNCode"
                          placeholder="Enter HSN Code"
                          component={Input}
                        />
                      </FormItem>
                      <FormItem
                        label="Discription"
                        invalid={errors.Discription && touched.Discription}
                        errorMessage={errors.Discription}
                      >
                        <Field
                          type="text"
                          autoComplete="off"
                          name="Discription"
                          placeholder="Enter  Discription"
                          component={Input}
                        ></Field>
                      </FormItem>

                      <FormItem
                        label="GST%"
                        invalid={errors.GST && touched.GST}
                        errorMessage={errors.GST}
                      >
                        <Field
                          type="Number"
                          autoComplete="off"
                          name="GST"
                          placeholder="Enter GST %"
                          component={Input}
                        />
                      </FormItem>
                      <FormItem
                        label="Name"
                        invalid={errors.name && touched.name}
                        errorMessage={errors.name}
                      >
                        <Field
                          type="text"
                          autoComplete="off"
                          name="name"
                          placeholder="Enter Name"
                          component={Input}
                        />
                      </FormItem>
                    </div>

                    <div>
                      <FormItem
                        label="Usage Unit"
                        invalid={errors.unit && touched.unit}
                        errorMessage={errors.unit}
                      >
                        <Field name="unit">
                          {({ field, form }) => (
                            <Select
                              placeholder="Please Select"
                              options={UsageUnite}
                              field={field.value}
                              form={form}
                              //value={obj}
                              //   value={values.unit}
                              //   onChange={(option) =>
                              //     form.setFieldValue(field.name, option)
                              //   }
                              onChange={(option) => {
                                form.setFieldValue(field.name, option.value);
                              }}
                            />
                          )}
                        </Field>
                      </FormItem>

                      <FormItem
                        label="GSTIN No"
                        invalid={errors.GSTINNo && touched.GSTINNo}
                        errorMessage={errors.GSTINNo}
                      >
                        <Field
                          type="number"
                          autoComplete="off"
                          name="GSTINNo"
                          placeholder="Enter GSTIN No"
                          component={Input}
                        />
                      </FormItem>

                      <FormItem
                        label="Status"
                        invalid={errors.status && touched.status}
                        errorMessage={errors.status}
                      >
                        <Field name="status">
                          {({ field, form }) => (
                            <Select
                              placeholder="Please Select"
                              options={StatusOptions}
                              field={field.value}
                              form={form}
                              // value={values.status}
                              //   onChange={(option) =>
                              //     form.setFieldValue(field.name, option)
                              //   }
                              onChange={(option) => {
                                form.setFieldValue(field.name, option.value);
                                console.log(option, "option");
                              }}
                            />
                          )}
                        </Field>
                      </FormItem>
                      <FormItem label="Upload Image">
                        <Upload getImgValue={getImgValue} />
                      </FormItem>

                      <FormItem>
                        <Button variant="solid" type="submit" className="mr-10">
                          Submit
                        </Button>

                        <Button
                          variant="default"
                          onClick={handleDiscard}
                          type="button"
                        >
                          Cancel
                        </Button>
                      </FormItem>
                    </div>
                  </FormContainer>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </Dialog>
  );
};

export default Addnewproduct;
