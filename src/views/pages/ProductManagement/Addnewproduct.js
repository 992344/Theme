
import React, { useState } from 'react'
import { Input, Button, Checkbox, FormItem, FormContainer, toast } from 'components/ui'
import { Field, Form, Formik } from 'formik'
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'
import * as Yup from 'yup'
import { Select } from 'components/ui'
import { useNavigate } from 'react-router-dom'
import Notification from 'components/template/Notification'
const UsageUnite = [
    { value: 'MTS', label: 'MTS'  },
    { value: 'Tons', label: 'Tons'},
    { value: 'Kg', label: 'Number' },
    { value: 'Number', label: 'Number'},
   
  ]
  const StatusOptions = [
    { value: 'Active', label: 'Active'  },
    { value: 'Inactive', label: 'Inactive'},
   
  ]

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email Required'),
	userName: Yup.string().min(3, 'Too Short!').max(12, 'Too Long!').required('User Name Required'),
	password: Yup.string().required('Password Required').min(8, 'Too Short!').matches(/^[A-Za-z0-9_-]*$/, 'Only Letters & Numbers Allowed'),
	rememberMe: Yup.bool()
})
const Addnewproduct = () => {

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
		navigate('/ProductManagement')
	}
	
	

    return (
        <div >
            <div className='bg-gray-200 rounded-md pt-3 pb-3 mb-4' ><h5 className='ml-5 '>Add New Product</h5></div>
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
								label="Product Category"
								// invalid={errors.userName && touched.userName}
								// errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="Product Category" placeholder="Enter Product Category" component={Input} />
							</FormItem>
                          <FormItem
								label="HSN Code"
								
							>
								<Field type="number" autoComplete="off" name="HSN Code" placeholder="Enter HSN Code"  component={Input}/>
							</FormItem>
                            <FormItem
								label="Discription"
								//invalid=''
								// errorMessage={errors.email}
							>
							<Field type="text" autoComplete="off" name="Discription" placeholder="Enter  Discription" component={Input} />
							</FormItem>

	
                           
							<FormItem
								label="Location"
								invalid={errors.email && touched.email}
								//errorMessage={errors.email}
							>
								<Field type="email" autoComplete="off" name="Location" placeholder="location" component={Input} />
							</FormItem>
                           
							
                          </div>
                            
                            <div>
							<FormItem 
							label="Usage Unit"
							       >
							<Select placeholder="Please Select" options={UsageUnite}></Select>
							</FormItem>
							<FormItem
							
							
								label="Aadhar No"
								invalid={errors.userName && touched.userName}
								//errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Aadhar No" component={Input} />
							</FormItem>
    
                            <FormItem
								label="GSTIN No"
								invalid={errors.userName && touched.userName}
								//errorMessage={errors.userName}
							>
								<Field type="text" autoComplete="off" name="userName" placeholder="Pan No" component={Input} />
							</FormItem>
                            

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

export default Addnewproduct
