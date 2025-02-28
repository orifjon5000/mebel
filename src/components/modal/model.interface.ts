import { CardItem } from "src/interfaces/cart.interface";

export interface ModalProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	handleClose: () => void;
	handleOpen: () => void;
	onDeleteAll: () => void;
	cartItems: CardItem[];
}
