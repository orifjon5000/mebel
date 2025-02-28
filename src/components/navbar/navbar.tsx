import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {  Stack, Box, Typography,  Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Navbar = ({cartItems}) => {
	const navigate = useNavigate();

	return (
		<Stack
			sx={{
				width: '1440px',
				color: 'black',
				backgroundColor: 'white',
			}}
		>
			{/* NAVBAR */}
			<Stack
				display={'flex'}
				flexDirection={'row'}
				justifyContent={'space-around'}
				sx={{
					height: '80px',
					width: '1440px',
					textAlign: 'center',
					alignItems: 'center',
					borderBottom: '1px solid #afafaf',
				}}
			>
				{' '}
				<Box
					onClick={() => navigate('/')}
					sx={{
						width: '120px',

						marginRight: '20px',
					}}
				>
					Cozy
				</Box>
				<Stack sx={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
					{navItems.map(({ label, path }) => (
						<Box
							key={label}
							onClick={() => navigate(path)}
							sx={{ cursor: 'pointer' }}
						>
							<Typography variant='h6' fontSize={18} gutterBottom>
								{label}
							</Typography>
						</Box>
					))}
				</Stack>
				<Box>
					<Stack direction='row' gap={2} alignItems={'center'} width={'100%'}>
						{accItems.map(({ isCart, icon: Icon }) => (
							<Box
								sx={{
									height: '80px',
									boxSizing: 'border-box',
									fontSize: '18px',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: 2,
									marginRight: '20px',
								}}
							>
								<Icon sx={{ marginBottom: '5px' }} />
							</Box>
						))}
						<Box
							onClick={() => navigate('/checkout')}
							sx={{
								display: 'flex',
								alignItems: 'center',
								borderLeft: '1px solid #afafaf ',
								paddingLeft: '30px',
								height: '80px',
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
								<ShoppingCartOutlinedIcon />
							</Badge>
						</Box>
					</Stack>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Navbar;
const accItems = [
	{ isCart: false, icon: SearchIcon },
	{ isCart: false, icon: PersonOutlineOutlinedIcon },
];
const navItems = [
	{ label: 'Home', path: '/' },
	{ label: 'Products', path: '/' },
	{ label: 'Checkout', path: '/checkout' },
	{ label: 'About', path: '/shop' },
];
