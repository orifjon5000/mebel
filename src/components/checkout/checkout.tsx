import {
	Box,
	Button,
	Card,
	CardMedia,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CheckoutProps } from './checkout.props';
import { Modal } from '..';
import OrderSummary from './order';
import Cart from './cart';
import { CardItem } from 'src/interfaces/cart.interface';

const Checkout = ({
	onDelete,
	onDeleteAll,
	onRemove,
	onAdd,
	cartItems,
}: CheckoutProps) => {
	
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
	
	return (
		<Stack sx={{ backgroundColor: '#ffffff' }}>
			<Typography marginLeft={4} paddingY={4} variant='h6'>
				Products
			</Typography>
			<Stack
				direction='row'
				gap={2}
				justifyContent='space-around'
				alignItems='flex-start'
			>
				<Stack direction={'column'} spacing={2} mb={2}>
					<Cart
						onDelete={onDelete}
						onDeleteAll={onDeleteAll}
						onRemove={onRemove}
						onAdd={onAdd}
						cartItems={cartItems}
					/>
				</Stack>
				<OrderSummary
					handle={handleOpen}
					handleClose={handleClose}
					onDeleteAll={onDeleteAll}
					cartItems={cartItems}
				/>
			</Stack>
			<Modal
				open={open}
				setOpen={setOpen}
				handleClose={handleClose}
				handleOpen={handleOpen}
				onDeleteAll={onDeleteAll}
				cartItems={cartItems}
			/>
		</Stack>
	);
};

export default Checkout;



