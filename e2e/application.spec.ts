import { by, device, expect, element } from 'detox';

describe('Application MVP', () => {
	const homeScreenId = 'home-screen';
	const upcomingMoviesListId = 'upcoming-movies-list';
	const listItemId = 'movie-list-item';
	const movieDetailsId = 'movie-details-screen';
	const movieDetailsContentId = 'movie-details-content';
	beforeAll(async () => {
		await device.launchApp();
	});

	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('Should render Home screen corretly', async () => {
		await expect(element(by.text('Upcoming Movies')).atIndex(0)).toBeVisible();
		await expect(element(by.id(homeScreenId))).toBeVisible();
	});

	it('Should display upcoming movies and scroll bottom to fetch more data', async () => {
		await expect(element(by.id(listItemId)).atIndex(3)).toBeVisible();
		await element(by.id(upcomingMoviesListId)).scroll(2000, 'down');
		await expect(element(by.id(listItemId)).atIndex(20)).toExist();
	});

	it('Should navigate do Movie Details and render the screen', async () => {
		await expect(element(by.id(listItemId)).atIndex(3)).toBeVisible();
		await element(by.id(listItemId)).atIndex(3).tap();
		await expect(element(by.id(movieDetailsId))).toBeVisible();
		await expect(element(by.id(movieDetailsContentId))).toExist();
	});
});
