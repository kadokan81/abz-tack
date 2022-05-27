import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1170px;
	padding: 0 15px;
	margin: 0 auto;
	@media (max-width: 1024px) {
		width: 936px;
	}
	@media (max-width: 768px) {
		width: 734px;
	}
	@media (max-width: 360px) {
		width: 328px;
	}
`;
