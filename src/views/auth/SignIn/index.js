import React from 'react'
import SignInForm from './SignInForm'

const SignIn = () => {
	return (
		<>
			<div className="mb-8">
				<p className="text-2xl mb-1 pl-8">Welcome to</p>
				<img src="/img/loginImage1.png" alt="" />
			</div>
			<SignInForm disableSubmit={false} />
		</>
	)
}

export default SignIn