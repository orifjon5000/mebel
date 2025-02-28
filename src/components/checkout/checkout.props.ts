import { CardItem } from "src/interfaces/cart.interface";

export interface CheckoutProps {
	onDelete: (item: CardItem) => void;
	onRemove: (item: any) => void;
	onAdd: (i: any) => void;
	onDeleteAll: () => void;
	cartItems: CardItem[];
}
