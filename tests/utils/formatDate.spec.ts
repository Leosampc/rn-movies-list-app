import { formatDate } from '@/utils';

describe('formatDate function', () => {
	it('Should return the correct date text matching', () => {
		const dateToFormat = '1998-03-04'; // My Birthday :D
		const expectedResult = '1998/03/04';

		const formatedDate = formatDate(dateToFormat);

		expect(formatedDate).toBe(expectedResult);
	});
});
