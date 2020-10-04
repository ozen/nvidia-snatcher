import {Store} from './store';

export const Vatan: Store = {
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
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx2060-super-ventus-gp-oc-8gb-gddr6-256bit-dx12-nvidia-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url: 'https://www.vatanbilgisayar.com/asus-tuf-rtx3080-gaming-10gb-gddr6x-320bit-dx12-nvidia-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.vatanbilgisayar.com/asus-tuf-rtx3080-gaming-oc-10gb-gddr6x-320bit-dx12-nvidia-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3080',
			url: 'https://www.vatanbilgisayar.com/asus-rog-strix-rtx3080-gaming-10gb-gddr6x-320bit-dx12-ekran-karti.html'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3080',
			url: 'https://www.vatanbilgisayar.com/asus-rog-strix-rtx3080-gaming-oc-10gb-gddr6x-320bit-dx12-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'gaming trio',
			series: '3080',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3080-gaming-trio-10g-10gb-gddr6x-320bit-nvidia-ekran-karti.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.vatanbilgisayar.com/msi-geforce-rtx-3080-gaming-x-trio-10g-10gb-gddr6x-320bit-nvidia-ekran-karti.html'
		}
	],
	name: 'vatan'
};
