import styled from 'styled-components';
import { Button } from '../styled/Button';
import MainLogo from './MainLogo';

const HeaderStyle = styled.header`
	display: flex;
	height: 60px;
	align-items: center;

	.main-logo {
		flex: 1 1 auto;
	}
	.button-group {
		display: flex;
		gap: 12px;
	}
`;

const Header = () => {
	return (
		<HeaderStyle>
			<div className='main-logo'>
				<MainLogo />
			</div>
			<div className='button-group'>
				<a href='#users'>
					<Button>Users</Button>
				</a>
				<a href='#sign-up'>
					<Button>SignUp</Button>
				</a>
			</div>
		</HeaderStyle>
	);
};

export default Header;
