import { StyledInput } from '../styled/InputStyled';

const Input = ({ datacontent, type, name, register, label, errorsObj }) => {
	return (
		<>
			{type === 'tel' && (
				<StyledInput className='floating' error={errorsObj.name}>
					<input
						className='floating__input'
						name={name}
						type='tel'
						placeholder={datacontent}
						// pattern='^[\+]{0,1}380([0-9]{9})$'
						{...register(label, {
							required: true,
							pattern: /^[+]{0,1}380([0-9]{9})$/,
						})}
					/>
					<label
						htmlFor='input__username'
						className='floating__label'
						data-content={datacontent}>
						<span className='hidden--visually'></span>
					</label>
					{type === 'tel' && (
						<small>
							+38 (XXX) XXX - XX - XX
							{errorsObj.phone && (
								<small className='error-smal'> wrong format</small>
							)}
						</small>
					)}
				</StyledInput>
			)}
			{type === 'email' && (
				<StyledInput className='floating' error={errorsObj.email}>
					<input
						className='floating__input'
						placeholder={datacontent}
						{...register('email', {
							required: 'Email is required',
							pattern: {
								// prettier-ignore
								value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Please enter a valid email',
							},
						})}
					/>
					<label
						htmlFor='input__username'
						className='floating__label'
						data-content={datacontent}>
						<span className='hidden--visually'></span>
					</label>
					{errorsObj.email && (
						<small className='error-smal'> {errorsObj.email.message}</small>
					)}
				</StyledInput>
			)}
			{type === 'text' && (
				<StyledInput className='floating' error={errorsObj.name}>
					<input
						className='floating__input'
						placeholder={datacontent}
						{...register('name', {
							maxLength: {
								value: 60,
								message: 'max 60 simbol',
							},
							minLength: {
								value: 2,
								message: 'min 4 char',
							},
							required: 'name is required',
						})}
					/>
					<label
						htmlFor='input__username'
						className='floating__label'
						data-content={datacontent}>
						<span className='hidden--visually'></span>
					</label>
					{errorsObj.name && (
						<small className='error-smal'>name is required</small>
					)}
				</StyledInput>
			)}
		</>
	);
};

export default Input;
