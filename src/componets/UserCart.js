import styled from 'styled-components';
import Image from '../styled/Image';
import CartBlockPopUp from './CartBlockPopUp';

const UserCartStyle = styled.div`
	align-self: stretch;
	max-width: 374px;
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 20px;
	background-color: #fff;
	border-radius: 10px;
	line-height: 26px;

	@media (max-width: 360px) {
		min-width: 320px;
		margin: 0 auto;
		padding: 0px 5px;
	}
`;

const UserCart = ({ user }) => {
	return (
		<UserCartStyle>
			<Image url={user.photo} />
			<CartBlockPopUp str={user.name} />
			<div className='cart__item'>{user.position}</div>
			<CartBlockPopUp str={user.email} />
			<div className='user_emil'>{user.phone}</div>
		</UserCartStyle>
	);
};

export default UserCart;
