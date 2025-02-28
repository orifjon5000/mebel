import {
	Box,
	Button,
	Card,
	CardMedia,
	Divider,
	IconButton,
	Modal as MuiModal, // alias
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { ModalProps } from './model.interface';
import { CardItem } from 'src/interfaces/cart.interface';
import { useNavigate } from 'react-router-dom';

const CustomerModal = ({
	open,
	setOpen,
	handleClose,
	handleOpen,
	onDeleteAll,
	cartItems,
}: ModalProps) => {
	const navigate = useNavigate();
	const itemsPrice = cartItems.reduce(
		(a: any, c: CardItem) => a + c.price * c.quantity,
		0
	);
	const discount = (itemsPrice * 15) / 100;

	const totalPrice = itemsPrice - discount;

	const onSubmit = () => {
		const newErrors = {
			name: customerInfo.name.trim() === '',
			email: customerInfo.email.trim() === '',
			phone: customerInfo.phone.trim() === '',
		};
		setErrors(newErrors);

		if (newErrors.name || newErrors.email || newErrors.phone) {
			return;
		}
		let TOKEN = '5971020452:AAEGLHyKFP_VEfrdKYTyPBkZT8FqwTbIPXQ';
		let chat_id = 93137680;

		let test = `   %0A
    Name : ${customerInfo.name} %0A
    e-mail : ${customerInfo.email} %0A
    Phone Number : ${customerInfo.phone} %0A
    Product ID : ${cartItems.map(a => a.id)} %0A
    Amount : ${totalPrice} %0A
  `;

		let api = new XMLHttpRequest();
		api.open(
			'GET',
			`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${chat_id}&text=${test}`,
			true
		);
		api.send();
		console.log('success');

		onDeleteAll();
		handleClose();
		navigate('/');
	};

	// Modal style
	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
		borderRadius: 2,
	};
	const [customerInfo, setCustomerInfo] = useState({
		name: '',
		email: '',
		phone: '',
	});
	const [errors, setErrors] = useState({
		name: false,
		email: false,
		phone: false,
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setCustomerInfo(prev => ({ ...prev, [name]: value }));
		if (value.trim() !== '') {
			setErrors(prev => ({ ...prev, [name]: false }));
		}
	};

	const handleSubmit = () => {
		const newErrors = {
			name: customerInfo.name.trim() === '',
			email: customerInfo.email.trim() === '',
			phone: customerInfo.phone.trim() === '',
		};
		setErrors(newErrors);

		if (newErrors.name || newErrors.email || newErrors.phone) {
			return;
		}

		handleClose();
	};

	return (
		<MuiModal open={open} onClose={handleClose}>
			<Box sx={modalStyle}>
				<IconButton
					onClick={handleClose}
					sx={{ position: 'absolute', top: 8, right: 8 }}
				>
					<CloseIcon />
				</IconButton>
				<Typography variant='h6' mb={2}>
					Customer Information
				</Typography>
				<TextField
					fullWidth
					label='Name'
					margin='normal'
					name='name'
					value={customerInfo.name}
					onChange={handleInputChange}
					error={errors.name}
					helperText={errors.name ? 'Name is required' : ''}
				/>
				<TextField
					fullWidth
					label='Email'
					margin='normal'
					name='email'
					value={customerInfo.email}
					onChange={handleInputChange}
					error={errors.email}
					helperText={errors.email ? 'Email is required' : ''}
				/>
				<TextField
					fullWidth
					label='Phone'
					margin='normal'
					name='phone'
					value={customerInfo.phone}
					onChange={handleInputChange}
					error={errors.phone}
					helperText={errors.phone ? 'Phone is required' : ''}
				/>
				<Button variant='contained' fullWidth sx={{ mt: 2 }} onClick={onSubmit}>
					Yuborish
				</Button>
			</Box>
		</MuiModal>
	);
};

export default CustomerModal;
