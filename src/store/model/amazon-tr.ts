import {Store} from './store';

export const AmazonTr: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#add-to-cart-button',
			text: ['']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.com.tr/dp/B07GQYQ2YW'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.amazon.com.tr/dp/B08HN37VQK'
		}
	],
	name: 'amazon-tr'
};
