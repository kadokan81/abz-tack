import styled from 'styled-components';

export const Heading = styled.h1`
	font-family: 'Nunito';
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 40px;
	/* color: #fff; */
	/* color: ${(props) => (props.white ? '#fff' : 'rgba(0, 0, 0, 0.87')}; */
	color: ${(props) => (props.white ? '#fff' : 'rgba(0, 0, 0, 0.87)')};
	margin-bottom: 21px;
`;
