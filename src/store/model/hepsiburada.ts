import {Store} from './store';

export const Hepsiburada: Store = {
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#addToCart',
			text: ['']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.hepsiburada.com/msi-geforce-rtx-2080-ti-gaming-x-trio-11gb-352bit-gddr6-pci-e-3-0-ekran-karti-p-hbv00000dgagn'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url: 'https://www.hepsiburada.com/asus-geforce-rtx-3080-oc-10gb-320bit-gddr6x-dx12-pci-express-4-0-ekran-karti-tuf-rtx-3080-o10g-gaming-p-HBV00000XATX0'
		}
	],
	name: 'hepsiburada'
};
