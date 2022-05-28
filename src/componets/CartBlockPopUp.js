import styled from 'styled-components';

const CartBlockStyle = styled.div`
	position: relative;

	&:hover > .cart__item_hover {
		display: block;
		visibility: visible;
		opacity: 1;
		transition: all 0.5s ease 0;
	}
	.cart__item {
		margin-bottom: 20px;
		margin: 0 auto;
		cursor: pointer;
	}
	.cart__item_hover {
		position: absolute;
		visibility: hidden;
		opacity: 0;
		z-index: 10;
		bottom: -40px;
		right: -90%;
		border-radius: 10px;
		padding: 5px 16px;
		background-color: black;
		color: white;
	}
`;

const CartBlockPopUp = ({ str }) => {
	const reduceString = (str, length = 30) => {
		return str.length > length ? str.substring(0, length - 3) + '...' : str;
	};
	return (
		<CartBlockStyle>
			<div className='cart__item'>{reduceString(str)}</div>
			{str.length > 30 && <div className='cart__item_hover'>{str} </div>}
		</CartBlockStyle>
	);
};

export default CartBlockPopUp;
