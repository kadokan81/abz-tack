import { Heading } from '../styled/Heading';
import Input from './Input';
import CheckBox from './CheckBox';
import Textarea from './Textarea';
import styled from 'styled-components';
import { Button } from '../styled/Button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import SuccessLogo from './SuccessLogo';
import useGetUsers from '../context/getuserContext';

const PostSectionStylr = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 100px;
	h1 {
		margin-bottom: 50px;
	}
	form {
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: center;
		button {
			margin-top: 50px;
		}
	}
`;

const PostRequestSection = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm();

	const [success, setSuccess] = useState({
		success: false,
		message: '',
	});

	const { refetch } = useGetUsers();

	const token = sessionStorage.getItem('token')
		? sessionStorage.getItem('token')
		: fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					sessionStorage.setItem('token', JSON.stringify(data.token));
				});
	const onSubmit = async (data) => {
		const newData = { ...data, position_id: parseInt(data.position_id) };
		// console.log('data', newData);

		var formData = new FormData();

		var fileField = document.querySelector('input[type="file"]');
		formData.append('position_id', newData.position_id);
		formData.append('name', newData.name);
		formData.append('email', newData.email);
		formData.append('phone', newData.phone);
		formData.append('photo', fileField.files[0]);

		await fetch(
			'https://frontend-test-assignment-api.abz.agency/api/v1/users',
			{
				method: 'POST',
				body: formData,
				headers: { Token: token },
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setSuccess({ success: data.success, message: data.message });
				if (data.success) {
					refetch();
				}
				// console.log(data);
			});
	};

	return (
		<PostSectionStylr id='sign-up'>
			<Heading>
				{success.success
					? 'User successfully registered'
					: 'Working with POST request'}
			</Heading>
			{success.success ? (
				<div>
					<SuccessLogo />
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						datacontent='Username'
						type='text'
						name='name'
						label='name'
						register={register}
						setError={setError}
						required
						errorsObj={errors}
						error={errors.name}
					/>
					<Input
						datacontent='Email'
						type='email'
						name='email'
						label='email'
						register={register}
						required
						errorsObj={errors}
					/>
					<Input
						datacontent='Phone'
						type='tel'
						name='phone'
						label='phone'
						register={register}
						required
						errorsObj={errors}
					/>

					<CheckBox
						register={register}
						label='position_id'
						required
						errorsObj={errors}
					/>
					<Textarea
						register={register}
						label='photo'
						required
						errorsObj={errors}
					/>
					<Button type='submit'>Sign Up</Button>
					{success.message && success.success === false && (
						<p>{success.message}</p>
					)}
				</form>
			)}
		</PostSectionStylr>
	);
};

export default PostRequestSection;
