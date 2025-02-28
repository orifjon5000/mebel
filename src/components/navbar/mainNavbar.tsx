import * as React from 'react';
import { Stack, Box, Typography, Button, Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const MainNavbar = ({cartItems}:any) => {
	const navigate = useNavigate();

	const accItems = [
		{ text: 'Search', icon: SearchIcon },
		{ text: 'Account', icon: PersonOutlineOutlinedIcon },
		
	];

	const navItems = [
		{ label: 'Home', path: '/' },
		{ label: 'Products', path: '/' },
		{ label: 'Checkout', path: '/checkout' },
		{ label: 'About', path: '/shop' },
	];

	return (
		<Stack
			sx={{
				width: '100%',
				minHeight: '700px',
				backgroundImage: `url("/photos/fon.jpg")`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{/* NAVBAR */}
			<Stack
				flexDirection='row'
				justifyContent='space-around'
				alignItems='center'
				sx={{
					height: '90px',
					width: '100%',
				}}
			>
				{/* LOGO */}
				<Box
					onClick={() => navigate('/')}
					component='img'
					src='/photos/logo.png'
					alt='logo'
					sx={{
						width: '120px',
						cursor: 'pointer',
						objectFit: 'cover',
						filter: 'invert(100%) brightness(1200%)',
					}}
				/>

				{/* MENU */}
				<Stack direction='row' gap={6}>
					{navItems.map(({ label, path }) => (
						<Typography
							key={label}
							onClick={() => navigate(path)}
							sx={{ cursor: 'pointer', fontSize: 18, color: 'white' }}
						>
							{label}
						</Typography>
					))}
				</Stack>

				{/* ICONLAR */}
				<Stack direction='row' gap={2} alignItems='center'>
					{accItems.map(({ text, icon }) => (
						<Box
							key={text}
							sx={{
								cursor: 'pointer',
								display: 'flex',
								alignItems: 'center',
								gap: 1,
							}}
						>
							{React.createElement(icon, { sx: { color: 'white' } })}
							<Typography variant='h6' color='white'>
								{text}
							</Typography>
						</Box>
					))}
					<Box
						onClick={() => navigate('/checkout')}
						sx={{
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							gap: 1,
						}}
					>
						{' '}
						<Badge
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
							badgeContent={cartItems?.length}
							color='primary'
						>
							<ShoppingCartOutlinedIcon
								sx={{
									color: '#ffffff',
								}}
							/>
						</Badge>
					</Box>
				</Stack>
			</Stack>

			{/* HEADER */}
			<Stack alignItems='center' mt='170px'>
				<Typography
					variant='h4'
					color='white'
					textAlign='center'
					sx={{ maxWidth: '824px' }}
				>
					Elevate Your Home Decor with Our Premium Furniture Collection
				</Typography>
				<Button
					variant='contained'
					sx={{
						mt: 2,
						fontSize: '17px',
						backgroundColor: 'white',
						color: 'black',
						width: '192px',
						height: '60px',
						'&:hover': { backgroundColor: '#f0f0f0' },
					}}
				>
					Contact Us
				</Button>
			</Stack>
		</Stack>
	);
};

export default MainNavbar;
