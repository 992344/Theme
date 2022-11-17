
import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, toast } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import * as Yup from 'yup'
import { Select } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import Notification from 'components/template/Notification'
const PamentTermOptions = [
    { value: 'Next5', label: 'Next5'  },
    { value: 'Next7', label: 'Next7'},
    { value: 'Next10', label: 'Next10' },
    { value: 'Next15', label: 'Next15'},
    { value: 'Next20', label: 'Next20' },
    { value: 'Next30', label: 'Next30' },
   
  ]
  const StatusOptions = [
    { value: 'Approve', label: 'Approve'  },
    { value: 'Pending', label: 'Pending'},
    { value: 'Reject', label: 'Reject' },
  ]

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email Required'),
	userName: Yup.string().min(3, 'Too Short!').max(12, 'Too Long!').required('User Name Required'),
	password: Yup.string().required('Password Required').min(8, 'Too Short!').matches(/^[A-Za-z0-9_-]*$/, 'Only Letters & Numbers Allowed'),
	rememberMe: Yup.bool()
})

const Basic = () => {

    const navigate = useNavigate()

	

	const handleFormSubmit =  () => {
			toast.push(
				<Notification  title={'Successfuly added'} type="success" duration={2500}>
					Product successfuly added
				</Notification>
				,{
					placement: 'top-center'
				}
			)
			navigate('/app/sales/product-list')
		}
		
	

	const handleDiscard = () => {
		navigate('/Suppliertable')
	}
	
	

    return (
        <div >
            <div className='bg-gray-200 rounded-md pt-3 pb-3 mb-4' ><h5 className='ml-5 '> Supplier Management</h5></div>
			<Formik
				initialValues={{ email: '', userName: '', password: '', rememberMe: false }}
				validationSchema={validationSchema}
                on
				
			>
				{({touched, errors, resetForm}) => (
					<Form>
						<FormContainer>
                            <div className='gap-10 columns-2'>
                          <div>
                            <FormItem
								label="User Name"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="User Name" component={Input} />
							</FormItem>
                          <FormItem
								label="Email ID"
								invalid={errors.email && touched.email}
								errorMessage={errors.email}
							>
								<Field type="email" autoComplete="off" name="email" placeholder="Email Id" component={Input} />
							</FormItem>
                            <FormItem
								label="Mobile No"
								invalid=''
								errorMessage={errors.email}
							>
								<Field type="number" autoComplete="off" name="email" placeholder="Mobile No" component={Input} />
							</FormItem>
                            <FormItem
								label="Billing Address"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Billing Address" component={Input} />
							</FormItem>
                            <FormItem
								label="City"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="City Name" component={Input} />
							</FormItem>
                            <FormItem
								label="Pin Code"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Enter Pin" component={Input} />
							</FormItem>
<span><label htmlFor="">Comment</label></span>
							<div>	<Input placeholder="Text area example" textArea /></div>
							
							
                          </div>
                            
                            <div>
							<FormItem
								label="Location"
								invalid={errors.email && touched.email}
								errorMessage={errors.email}
							>
								<Field type="email" autoComplete="off" name="email" placeholder="location" component={Input} />
							</FormItem>
							<FormItem
								label="Aadhar No"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Aadhar No" component={Input} />
							</FormItem>
                            <FormItem
								label="Pan No"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Pan No" component={Input} />
							</FormItem>
                            <FormItem
								label="GSTIN No"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Pan No" component={Input} />
							</FormItem>
                            <FormItem
								label="Grade"
								invalid={errors.userName && touched.userName}
								errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Grade" component={Input} />
							</FormItem>
                            <div  className='gap-4 mb-4'>
                                <span><label htmlFor="">Payments Terms</label></span>
			<Select placeholder="Please Select" options={PamentTermOptions}></Select>
		</div>

        <div className='gap-4 mb-4'>
                                <span><label htmlFor="">Satus</label></span>
			<Select placeholder="Please Select" options={StatusOptions}></Select>
		</div>
							<div className='inline-flex flex-wrap xl:flex gap-rend justify-between mt-4 '>
							
							<FormItem >
                               <Button variant="default" onClick={handleDiscard} type="button">Cancel</Button>                            
							</FormItem>
                            <FormItem>
                            <Button variant="solid" onSubmit={handleFormSubmit} type="submit">Submit</Button>
                            </FormItem>
                            </div>
                            </div>
                            </div>
						</FormContainer>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default Basic
