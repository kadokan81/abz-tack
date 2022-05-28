import styled from 'styled-components';
import back from '../img/back-photo.webp';
import { Button } from '../styled/Button';
import { Heading } from '../styled/Heading';

const FullSectionStyle = styled.section`
	padding: 160px 0px;
	background: url(${back}) 0 0 / cover no-repeat;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	@media (max-width: 1024px) {
		padding: 100px 0px;
		margin: 0px -15px;
	}
	@media (max-width: 768px) {
		padding: 35px 0px;
	}
	@media (max-width: 360px) {
		padding: 35px 0px;
	}

	div {
		width: 380px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 20px;
		@media (max-width: 360px) {
			width: 328px;
		}
	}
	p {
		color: white;
		text-align: center;
		line-height: 26px;
		margin-bottom: 36px;
	}
`;
const FullScreanSection = () => {
	return (
		<FullSectionStyle>
			<div>
				<Heading white>Test assignment for front-end developer</Heading>
				<p>
					What defines a good front-end developer is one that has skilled
					knowledge of HTML, CSS, JS with a vast understanding of User design
					thinking as they'll be building web interfaces with accessibility in
					mind. They should also be excited to learn, as the world of Front-End
					Development keeps evolving.
				</p>
				<Button>Sign up</Button>
			</div>
		</FullSectionStyle>
	);
};

export default FullScreanSection;
