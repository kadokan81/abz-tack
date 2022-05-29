const token = sessionStorage.getItem('token')
	? sessionStorage.getItem('token')
	: fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				sessionStorage.setItem('token', JSON.stringify(data.token));
			});

export const postUser = async (formData) => {
	const { response } = await fetch(
		'https://frontend-test-assignment-api.abz.agency/api/v1/users',
		{
			method: 'POST',
			body: formData,
			headers: { Token: token },
		}
	);
	console.log('response.json();', response);
	return response.json();
	// .then((response) => {
	// 	return response.json();
	// })
	// .then((data) => {
	// 	setSuccess({ success: data.success, message: data.message });
	// 	if (data.success) {
	// 		refetch();
	// 	}
	// 	console.log(data);
	// });
};
