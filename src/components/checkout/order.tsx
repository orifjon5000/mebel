import {
	Box,
	Button,
	Divider,
	Stack,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

import { CardItem } from 'src/interfaces/cart.interface';

const OrderSummary = ({ handle, cartItems, onDeleteAll, handleClose }) => {

	const itemsPrice = cartItems.reduce(
		(a: any, c: CardItem) => a + c.price * c.quantity,
		0
	);
	const discount = (itemsPrice * 15) / 100;

	const totalPrice = itemsPrice - discount;

	

	return (
		<Box
			sx={{
				height: '450px',
				width: 380,
				bgcolor: '#ffffff',
				p: 3,
				borderRadius: 2,
				boxShadow: 3,
			}}
		>
			{/* Order Summary title */}
			<Typography variant='h6' fontWeight='bold' mb={2}>
				Order Summary
			</Typography>

			{/* Selected Items */}
			<Stack direction='row' justifyContent='space-between' mb={1}>
				<Typography variant='body1' color='text.secondary'>
					Selected Items
				</Typography>
				<Typography fontWeight='bold'>{cartItems.length}</Typography>
			</Stack>

			{/* Price Details */}
			<Stack direction='row' justifyContent='space-between'>
				<Typography>Price:</Typography>
				<Typography fontWeight='bold'>${itemsPrice}</Typography>
			</Stack>
			<Stack direction='row' justifyContent='space-between'>
				<Typography>Discount:</Typography>
				<Typography fontWeight='bold' color='error'>
					-${discount}
				</Typography>
			</Stack>
			<Stack direction='row' justifyContent='space-between'>
				<Typography>Shipping:</Typography>
				<Typography fontWeight='bold' color='success.main'>
					Free
				</Typography>
			</Stack>

			{/* Divider Line */}
			<Divider sx={{ my: 2 }} />

			{/* Total & Delivery Date */}
			<Stack direction='row' justifyContent='space-between'>
				<Typography fontWeight='bold'>Total:</Typography>
				<Typography fontWeight='bold' fontSize={18}>
					${totalPrice}
				</Typography>
			</Stack>
			<Typography mt={1} color='text.secondary' fontSize={14}>
				Estimated Delivery by <strong>02.04.2025</strong>
			</Typography>

			{/* Submit Button */}
			<Button
				onClick={handle}
				variant='contained'
				fullWidth
				sx={{
					mt: 3,
					bgcolor: 'grey.800',
					color: 'white',
					'&:hover': { bgcolor: 'grey.900' },
				}}
			>
				Sotuvchiga yuborish
			</Button>
		</Box>
	);
};

export default OrderSummary;
