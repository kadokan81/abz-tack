import styled from 'styled-components';

const ImgStyled = styled.div`
	width: auto;
	height: 70px;
	overflow: hidden;
	border-radius: 50%;
	margin-bottom: 20px;
	@media (max-width: 360px) {
		margin-top: 20px;
	}

	.user_image img {
		display: block;
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

const Image = ({ url }) => {
	return (
		<ImgStyled>
			<img src={url} alt='user' />
		</ImgStyled>
	);
};

export default Image;
