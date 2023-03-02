import axios, { AxiosError } from 'axios';
import { API_URL, API_KEY } from 'react-native-dotenv';
export const api = axios.create({
	baseURL: API_URL,
});

const errorHandler = (error: AxiosError) => {
	const statusCode = error.response?.status;

	if (statusCode && statusCode !== 401) {
		console.error(error);
	}

	return Promise.reject(error);
};

api.interceptors.request.use(
	function ({ params, ...config }) {
		return {
			...config,
			params: { ...params, api_key: API_KEY },
		};
	},
	function (error) {
		return Promise.reject(error);
	}
);

api.interceptors.response.use(undefined, (error) => {
	return errorHandler(error);
});
