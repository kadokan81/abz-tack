import { useQuery } from 'react-query';

const getUser = async (page = 1) =>
	await fetch(
		`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
	).then((res) => res.json());

const useGetUsers = (page = 1) => {
	const data = useQuery(['users', page], () => getUser(page), {});

	return data;
};

export default useGetUsers;
