import React from 'react'
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import * as yup from 'yup'

function handleSave(values) {
	console.log(values)
}

export default function Formik() {
	const validationSchema = yup.object({
		email: yup.string().email('Enter a valid email').required('Email is required'),
		password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required')
	})
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			handleSave(values)
		},
		validationSchema
	})
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
			<TextField
			name="email"
			label="Email"
			value={formik.values.email}
			onChange={formik.handleChange}
			error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}     
			/>				
			<TextField
			name="password"
			label="Password"
			value={formik.values.password}
			type="password"
			onChange={formik.handleChange}	
			error={formik.touched.password && Boolean(formik.errors.password)}
			helperText={formik.touched.password && formik.errors.password}
			/>				
			
			<Button type="submit" color="primary" variant="contained">Submit</Button>

			</form>
		</div>
	)
}
