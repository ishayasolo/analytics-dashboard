import { SummaryCardProps } from "../components/SummaryCard";
import boxTick from '../assets/box-tick.svg';
import threeDRotate from '../assets/3d-rotate.svg';
import shoppingCart from '../assets/shopping-cart.svg';
import coin from '../assets/coin.svg';
import { PlatformProps } from "../components/Platform";

export const summary: SummaryCardProps[] = [
	{
		icon: boxTick,
		title: 'total order',
		amount: 350,
		rate: 23.5,
	},
	{
		icon: threeDRotate,
		title: 'total refund',
		amount: 270,
		rate: 23.5,
		isDeclining: true,
	},
	{
		icon: shoppingCart,
		title: 'average sales',
		amount: 1567,
		rate: 23.5,
		isDeclining: true,
	},
	{
		icon: coin,
		title: 'total income',
		amount: 350000,
		rate: 23.5,
		isCurrency: true,
	},
];

export const platforms: PlatformProps[] = [
	{
		name: 'Book Bazaar',
		amount: 2500000,
		progress: 54.2,
		backgroundColor: '#6160DC',
		increment: 15,
	},
	{
		name: 'Artisan Aisle',
		amount: 1800000,
		progress: 45.2,
		backgroundColor: '#54C5EB',
		increment: 10,
	},
	{
		name: 'Toy Troop',
		amount: 1200000,
		progress: 27,
		backgroundColor: '#FFB74A',
		increment: 8,
	},
	{
		name: 'XStore',
		amount: 1000000,
		progress: 25,
		backgroundColor: '#FF4A55',
		increment: 6,
	},
]
