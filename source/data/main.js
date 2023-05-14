const pages = [
	{
		title: 'Тестовое 1',
		url: 'test1.html'
	},
	{
		title: 'Тестовое 2',
		url: 'test2.html'
	}
];

export default ({ pageName }) => ({
	getImages(filename, additions = {}) {
		const image = Object.assign(additions, {
			default: `images/${filename}.jpg`,
			default2x: `images/${filename}@2x.jpg`,
			webp: `images/${filename}.webp`,
			webp2x: `images/${filename}@2x.webp`
		});

		return image;
	},
	isIndex: pageName === 'index.html',
	pages,
	pixelperfect: JSON.stringify({ breakpoints: [320, 1600], ext: 'webp' }),
	projectName: 'VanilaGrey',
	ringPage: pages[0]
});
