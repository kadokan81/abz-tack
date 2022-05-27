import styled from 'styled-components';

export const InputFile = styled.label`
	position: relative;
	width: 328px;
	height: 52px;
	display: block;
	background: #f8f8f8;
	display: flex;
	align-items: center;
	cursor: pointer;

	border-radius: 4px;
	.title {
		flex: 0 0 84px;
		height: 100%;

		border-radius: 4px 0px 0px 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: ${(props) =>
			!props.error ? '1px solid black' : '2px solid #CB3D40'};
	}
	.placeholder {
		flex: 1 1 auto;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 16px;
		border: 1px solid gray;
		color: #7e7e7e;
		border-radius: 0px 4px 4px 0px;

		border: ${(props) =>
			!props.error ? '1px solid #7e7e7e' : '2px solid #CB3D40'};
		border-left: transparent;
	}
	input {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
		border: ${(props) =>
			!props.error ? '1px solid #7e7e7e' : '2px solid #CB3D40'};
		border-left: transparent;
	}
`;
