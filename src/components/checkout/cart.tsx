import {
	Box,
	Button,
	Card,
	CardMedia,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { CheckoutProps } from './checkout.props';
import { CardItem } from 'src/interfaces/cart.interface';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const Cart = ({
	onDelete,
	onDeleteAll,
	onRemove,
	onAdd,
	cartItems,
}: CheckoutProps) => {
	return (
		<>
			{cartItems.map((item: CardItem) => (
				<Card
					key={item.id}
					sx={{
						display: 'flex',
						width: '825px',
						height: '330px',
						backgroundColor: '#ffffff',
					}}
				>
					<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
						{/* Image */}
						<CardMedia
							component='img'
							sx={{
								width: '290px',
								height: '250px',
								objectFit: 'contain',
								objectPosition: 'center',
							}}
							image={item.image}
							alt='Live from space album cover'
						/>

						{/* Main Content */}
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
							<Typography
								sx={{
									display: 'flex',
									gap: 5,
									fontSize: '15px',
									fontWeight: 'bold',
									alignItems: 'center',
									mt: '10px',
								}}
							>
								{item.name}
								<Typography sx={{ color: 'red' }}>
									{item.price - (item.price * 15) / 100}
								</Typography>
								<Typography
									sx={{
										textDecoration: 'line-through',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									{item.price}
									<LoyaltyOutlinedIcon sx={{ fontSize: '15px' }} />
								</Typography>
							</Typography>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
								<Typography sx={{ opacity: 0.8, fontSize: '12px' }}>
									Color:
								</Typography>
								<Typography>Green</Typography>
							</Box>
							<Stack direction='row' spacing={2}>
								{colors.map((color, index) => (
									<Circle key={index} color={color} />
								))}
							</Stack>
							<Box
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								width='100px'
								height='35px'
								border='1px solid #ccc'
								borderRadius='1px'
								px={1}
							>
								<IconButton onClick={() => onRemove(item)} size='small'>
									<RemoveIcon />
								</IconButton>

								<Typography variant='body1'>{item.quantity}</Typography>

								<IconButton onClick={() => onAdd(item)} size='small'>
									<AddIcon />
								</IconButton>

								<IconButton
									sx={{ marginLeft: 5 }}
									onClick={() => onDelete(item)}
								>
									<DeleteOutlineOutlinedIcon />
								</IconButton>
							</Box>

							<Button
								variant='contained'
								sx={{
									width: '240px',
									height: '40px',
									backgroundColor: '#000000B5',
									color: '#ffffff',
								}}
							>
								Savatga
							</Button>
						</Box>
					</Box>
				</Card>
			))}
		</>
	);
};
const Circle = ({ color }) => {
	return (
		<Box
			sx={{
				cursor: 'pointer',
				width: 17,
				height: 17,
				backgroundColor: color,
				borderRadius: '50%',
			}}
		/>
	);
};

const colors = [
	'#C1BDB3',
	'#58737D',
	'#545454',
	'#CBA5A5',
	'#F9C84E',
	'#5CE7B9',
	'#E4A2A2',
	'#961010',
];

export default Cart;
