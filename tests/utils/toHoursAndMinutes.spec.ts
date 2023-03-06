import { toHoursAndMinutes } from '@/utils';

describe('toHoursAndMinutes function', () => {
	it('Should return the correct time with hours and minutes', () => {
		const timeToTransform = 100;
		const expectedResult = '1h 40min';
		const transformedTime = toHoursAndMinutes(timeToTransform);

		expect(transformedTime).toBe(expectedResult);
	});
});
