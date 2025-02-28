import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Category, Product } from '../';

const Home = ({onAdd}) => {
	return (
		<Stack width={'1320px'} sx={{ margin: '0 auto' }}>
			<Category />
			<Box width={'1320px'} sx={{ margin: '0 auto' }}>
				<TextArea text='Lastest Product' label='See all' />

				<Stack spacing={2}>
					<Product type={'sofa'} onAdd={onAdd} />
					<TextArea text='All Products' label='See all' />
					<Product type={'table'} onAdd={onAdd} />
					<Product type={'lamp'} onAdd={onAdd} />
				</Stack>
			</Box>
		</Stack>
	);
};

export default Home;

const TextArea = ({ text, label }) => {
	return (
		<Stack
			width={'100%'}
			mx={'auto'}
			mt={'20px'}
			direction={'row'}
			justifyContent={'space-between'}
			alignItems={'center'}
		>
			<Typography sx={{ cursor: 'pointer' }} fontSize={'24px'}>
				{text}
			</Typography>
			<Typography sx={{ cursor: 'pointer' }} fontSize={'20px'}>
				{label}
			</Typography>
		</Stack>
	);
};
