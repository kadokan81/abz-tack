import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Spiner from './Spiner';

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	padding: 0px 16px 24px 16px;
	box-sizing: border-box;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	height: 48px;
	position: relative;
`;

const RadioButtonLabel = styled.label`
	position: absolute;
	top: 25%;
	left: 4px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background: white;
	border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
	margin-left: 12px;
	opacity: 0;
	z-index: 1;
	border-radius: 50%;
	width: 24px;
	height: 24px;
	margin-right: 10px;
	&:hover ~ ${RadioButtonLabel} {
		background: #bebebe;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 12px;
			height: 12px;
			margin: 6px;
			background: #eeeeee;
		}
	}
	${(props) =>
		props.checked &&
		` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 1px solid #00BDD3;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: #00BDD3;
      }
    }
  `}
`;

const fetchPositions = async () => {
	return await fetch(
		'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
	).then((res) => res.json());
};

const CheckBox = ({ register, required }) => {
	const [select, setSelect] = useState(1);
	const handleSelectChange = (event) => {
		const value = parseInt(event.target.value);
		setSelect(value);
	};

	const { isLoading, data, error } = useQuery('positions', fetchPositions);

	if (isLoading)
		return (
			<Wrapper>
				<Spiner />
			</Wrapper>
		);
	if (error) return <Wrapper>{error.message}</Wrapper>;

	return (
		<Wrapper>
			{data.positions.map((position) => (
				<Item key={position.id}>
					<RadioButton
						{...register('position_id', {
							required: true,
							valueAsNumber: true,
						})}
						type='radio'
						name='position_id'
						value={position.id}
						checked={select === position.id}
						onChange={(e) => handleSelectChange(e)}
						id={position.name}
					/>
					<RadioButtonLabel htmlFor={position.name} />
					<div className='lable-div'>{position.name}</div>
				</Item>
			))}
		</Wrapper>
	);
};

export default CheckBox;
