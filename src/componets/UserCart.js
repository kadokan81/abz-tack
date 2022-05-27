import styled from 'styled-components';
import Image from '../styled/Image';

const UserCartStyle = styled.div`
	align-self: stretch;
	max-width: 344px;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
	line-height: 26px;
	@media (max-width: 360px) {
		grid-template-columns: 1fr;
		min-width: 320px;
		margin: 0 auto;
		padding: 0px 5px;
	}

	.user_name {
		margin-bottom: 20px;
	}
	.user_emil {
		word-break: break-all;
	}
`;

const UserCart = ({ user }) => {
	return (
		<UserCartStyle>
			<Image url={user.photo} />
			<div className='user_name'>{user.name}</div>
			<div className='user_position'>{user.position}</div>
			<div className='user_emil'>{user.email}</div>
			<div className='user_emil'>{user.phone}</div>
		</UserCartStyle>
	);
};

export default UserCart;
