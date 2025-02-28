export interface Products {
	id: string;
	model: string;
	slug?: string;
	price: number;
	type: string;
	isActive?: boolean;
	top?: boolean;
	img: string;
	onAdd: (product: Products) => void;
}

export interface DataType {
	id: number;
	name: string;
	price: number;
}
