import styled from 'styled-components';
import { Heading } from '../styled/Heading';
import Spiner from '../componets/Spiner';
import UserCart from './UserCart';
import { Button } from '../styled/Button';
import { useState } from 'react';
import useGetUsers from '../context/getuserContext';

const GetRequesStyle = styled.section`
	padding-top: 140px;
	padding-bottom: 140px;
	min-height: 650px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CartsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(288px, 1fr));
	grid-auto-rows: 1fr;
	grid-column-gap: 30px;
	grid-row-gap: 30px;
	margin-bottom: 54px;
	margin-top: 54px;
	padding: 0px 15px;
	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, minmax(344px, 1fr));
	}
	@media (max-width: 768px) {
		width: 734px;
	}
	@media (max-width: 360px) {
		display: flex;
		flex-direction: column;
		padding: 0px 20px;
	}
`;

const GetRequestSection = () => {
	const [page, setPages] = useState(1);

	const { isFetching, isLoading, error, data } = useGetUsers(page);

	if (isLoading || isFetching)
		return (
			<GetRequesStyle>
				<Spiner />
			</GetRequesStyle>
		);

	if (error)
		return (
			<GetRequesStyle>
				<Heading>{error.message}</Heading>
			</GetRequesStyle>
		);
	const { users } = data;

	return (
		<GetRequesStyle>
			{isLoading ? (
				<Spiner />
			) : (
				<>
					<Heading>Working with GET request</Heading>
					<CartsWrapper>
						{users.map((user) => (
							<UserCart user={user} key={user.id} />
						))}
					</CartsWrapper>
					<Button
						disabled={data.total_pages <= page}
						onClick={() => setPages((prev) => prev + 1)}>
						{data.total_pages <= page ? 'No More' : 'Show more'}
					</Button>
				</>
			)}
		</GetRequesStyle>
	);
};

export default GetRequestSection;
