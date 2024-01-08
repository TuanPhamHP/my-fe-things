import { useAuthStore } from '~~/store/auth';

interface requestOptions {
	method: string;
	headers: Record<string, any>;
	body?: string;
	params?: Record<string, any> | string;
	query?: Record<string, any> | string;
	payload?: Record<string, any> | string;
}
export const fetchWrapper = {
	get: request('GET'),
	post: request('POST'),
	put: request('PUT'),
	delete: request('DELETE'),
};

function request(method: string) {
	return (url: string, body?: Record<string, any>) => {
		const requestOptions: requestOptions = {
			method,
			headers: authHeader(),
		};
		if (['GET', 'HEAD'].includes(method)) {
			if (body) {
				requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
				requestOptions.body = JSON.stringify({
					params: body.params,
				});
				requestOptions.query = body.params;
			}
		} else {
			if (body) {
				requestOptions.headers['Content-Type'] = 'application/json';
				requestOptions.body = JSON.stringify(body);
			}
		}
		console.log(requestOptions);
		return fetch(url, requestOptions);
	};
}

// helper functions

function authHeader() {
	// return auth header with jwt if user is logged in and request is to the api url
	const { user } = useAuthStore();
	const isLoggedIn = !!user?.token;
	if (isLoggedIn) {
		return { Authorization: `Bearer ${user.token}` };
	} else {
		return {};
	}
}

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);

//         if (!response.ok) {
//             const { user, logout } = useAuthStore();
//             if ([401, 403].includes(response.status) && user) {
//                 // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//                 logout();
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }
