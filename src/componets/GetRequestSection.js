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
	const [page, setPages] = useState(1);

	const { isFetching, isLoading, error, data } = useGetUsers(page);
	// const data = {
	// 	success: true,
	// 	page: 1,
	// 	total_pages: 10,
	// 	total_users: 47,
	// 	count: 5,
	// 	links: {
	// 		next_url:
	// 			'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=2&count=5',
	// 		prev_url: null,
	// 	},
	// 	users: [
	// 		{
	// 			id: '30',
	// 			name: 'Angelngel.williams@example.comlisa.medinangel.williams@example.comlisa.medina',
	// 			email:
	// 				'angel.williams@example.comlisa.medina@example.comlisa.medina@example.com',
	// 			phone: '+380496540023',
	// 			position: 'Designerlisa',
	// 			position_id: '4',
	// 			registration_timestamp: 1537777441,
	// 			photo:
	// 				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg',
	// 		},
	// 		{
	// 			id: '29',
	// 			name: 'Mattie',
	// 			email: 'mattie.lee@example.com',
	// 			phone: '+380204819073',
	// 			position: 'Designer',
	// 			position_id: '4',
	// 			registration_timestamp: 1537691099,
	// 			photo:
	// 				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1245cc29.jpeg',
	// 		},
	// 		{
	// 			id: '36',
	// 			name: 'Joshua',
	// 			email: 'joshua.dean@example.com',
	// 			phone: '+380542161925',
	// 			position: 'Designer',
	// 			position_id: '4',
	// 			registration_timestamp: 1537661281,
	// 			photo:
	// 				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1e527036.jpeg',
	// 		},
	// 		{
	// 			id: '37',
	// 			name: 'Lisa',
	// 			email: 'lisa.medina@example.com lisa.medina@example.com',
	// 			phone: '+380564753087',
	// 			position: 'Security',
	// 			position_id: '3',
	// 			registration_timestamp: 1537639019,
	// 			photo:
	// 				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba20bd9537.jpeg',
	// 		},
	// 		{
	// 			id: '42',
	// 			name: 'Lorraine',
	// 			email: 'lorraine.morris@example.com',
	// 			phone: '+380945198009',
	// 			position: 'Designer',
	// 			position_id: '4',
	// 			registration_timestamp: 1537629182,
	// 			photo:
	// 				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba293d2f42.jpeg',
	// 		},
	// 	],
	// };

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
