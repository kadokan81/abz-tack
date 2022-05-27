import React from 'react';
import { ErrorSpan } from '../styled/ErrorSpan';

import { InputFile } from '../styled/InputFile';

const Textarea = ({ errorsObj, register }) => {
	const [filedata, setFileength] = React.useState({
		filename: '',
	});
	const onChangeHandler = (e) => {
		const file = e.target.files[0];
		setFileength({
			filename: file.name,
		});
	};

	return (
		<InputFile htmlFor='file' error={errorsObj.photo}>
			<span className='title'>Upload</span>

			<span className='placeholder'>
				{!filedata.filename ? 'Upload your photo' : filedata.filename}
			</span>
			<input
				id='file'
				type='file'
				name='photo'
				{...register('photo', { required: 'Photo is required' })}
				onChange={onChangeHandler}
			/>
			{errorsObj.photo && (
				<ErrorSpan className='error-span'>{errorsObj.photo.message}</ErrorSpan>
			)}
		</InputFile>
	);
};

export default Textarea;
