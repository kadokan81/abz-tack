import styled, { css } from 'styled-components';

export const Button = styled.button`
	outline: none;
	min-width: 100px;
	display: inline-flex;
	justify-content: center;
	padding: 4px 24px;
	border-radius: 80px;
	line-height: 26px;
	transition: all 0.3s ease 0s;
	&:active {
		transform: translateY(5px);
	}
	${(props) => {
		switch (props.disabled) {
			case true:
				return css`
					background-color: #b4b4b4;
					color: #fff;
					cursor: no-drop;
				`;
			default:
				return css`
					cursor: pointer;
					background-color: #f4e041;
					color: black;
					&:hover {
						background-color: #ffe302;
					}
				`;
		}
	}}
`;
