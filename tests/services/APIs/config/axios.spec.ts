import { api } from '@/services/APIs/config';

let apiSpy;
describe('axios Api Instance', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('Axios instance standart request test', async () => {
		apiSpy = jest.spyOn(api, 'get');
		apiSpy.mockResolvedValueOnce({});

		await api.get('/mock/api/call');

		expect(apiSpy).toBeCalledTimes(1);
	});

	it('Axios instance standart request error test', async () => {
		const message = 'Network Error';

		apiSpy = jest.spyOn(api, 'get');
		apiSpy.mockRejectedValueOnce(new Error(message));

		await api.get('/mock/api/call').catch(() => undefined);

		expect(apiSpy).toBeCalledTimes(1);
	});
});
