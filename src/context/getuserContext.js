import { useQuery } from 'react-query';

export const getUsers = async (page = 1) => {
	const data = await fetch(
		`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
	).then((res) => res.json());
	return data;
};

const useGetUsers = (page = 1) => {
	const data = useQuery(['users', page], () => getUsers(page), {
		// keepPreviousData: true,
		// staleTime: 5000,
	});

	return data;
};

export default useGetUsers;
