import styled from 'styled-components';

export const StyledInput = styled.div`
	margin-bottom: 20px;
	textarea:focus,
	input:focus {
		outline: none;
	}

	transition: background-color 0.2s ease;
	width: 312px;
	height: 54px;
	border-radius: 4px;

	.floating__input {
		width: 100%;
		height: 100%;
		padding-left: 16px;
		font-size: 1rem;
		transition: border-color 0.2s ease;
		line-height: 26px;

		border-radius: 4px;
		border: ${(props) =>
			props.error ? '2px solid   #CB3D40' : '1px solid #d0cfcf'};
	}

	.floating:hover .floating__input {
		border-color: red;
	}

	.floating__input::placeholder {
		color: rgba(0, 0, 0, 0);
	}

	.floating__label {
		display: block;
		position: relative;
		max-height: 0;
		font-weight: 500;
		pointer-events: none;
	}

	.floating__label::before {
		color: #7e7e7e;
		content: attr(data-content);
		display: inline-block;
		filter: blur(0);
		backface-visibility: hidden;
		transform-origin: left top;
		transition: transform 0.2s ease;
		left: 1rem;
		position: relative;
	}

	.floating__label::after {
		bottom: 1rem;
		content: '';
		height: 0.1rem;
		position: absolute;
		transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
			opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
		opacity: 0;
		left: 0;
		top: 100%;
		margin-top: -0.1rem;
		transform: scale3d(0, 1, 1);
		width: 100%;
	}

	.floating__input:focus + .floating__label::after {
		transform: scale3d(1, 1, 1);
		opacity: 1;
	}

	.floating__input:placeholder-shown + .floating__label::before {
		transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
	}

	.floating__label::before,
	.floating__input:focus + .floating__label::before {
		transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
		transform: translateY(-68px);

		background-color: #fff;
	}

	.floating__input:focus + .floating__label::before {
		transform: translateY(-68px);
		font-size: 12px;
		background-color: #fff;
		padding: 0px 0px;
	}
	.error-span {
		display: inline-block;
		margin-top: 5px;
		margin-left: 20px;
		color: #cb3d40;
		font-size: 12px;
	}
	.error-smal {
		color: #cb3d40;
	}
`;
