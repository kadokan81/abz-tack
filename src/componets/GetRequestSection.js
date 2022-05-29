import styled from 'styled-components';
import { Heading } from '../styled/Heading';
import Spiner from '../componets/Spiner';
import UserCart from './UserCart';
import { Button } from '../styled/Button';
import { useEffect, useState } from 'react';
import useGetUsers, { getUsers } from '../context/getuserContext';
import { useQueryClient } from 'react-query';

const GetRequesStyle = styled.section`
	position: relative;
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
	grid-template-columns: repeat(3, minmax(288px, 380px));
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
	const [pageCurrent, setPages] = useState(() => 1);
	const qeryClient = useQueryClient();

	const { isFetching, isLoading, error, data, isError } =
		useGetUsers(pageCurrent);

	useEffect(() => {
		const nextPage = pageCurrent + 1;
		if (data?.total_pages > pageCurrent) {
			qeryClient.prefetchQuery(['users', nextPage], () => getUsers(nextPage));
		}
	}, [pageCurrent, qeryClient, data]);

	if (isLoading || isFetching)
		return (
			<GetRequesStyle>
				<Spiner />
			</GetRequesStyle>
		);

	if (isError)
		return (
			<GetRequesStyle>
				<Heading>{error.message}</Heading>
			</GetRequesStyle>
		);

	return (
		<GetRequesStyle id='users'>
			{isLoading ? (
				<Spiner />
			) : (
				<>
					<Heading>Working with GET request</Heading>
					<CartsWrapper>
						{data?.users.map((user) => (
							<UserCart user={user} key={user.id} />
						))}
					</CartsWrapper>
					<div>
						<Button
							disabled={data?.total_pages <= pageCurrent}
							onClick={() => setPages((prev) => prev + 1)}>
							{data?.total_pages <= pageCurrent ? 'No More' : 'Show more'}
						</Button>
					</div>
				</>
			)}
		</GetRequesStyle>
	);
};

export default GetRequestSection;
