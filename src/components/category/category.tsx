import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { categories } from 'src/config/data';

const Category = () => {
	return (
		<Stack
			direction='column'
			width='1320px'
			sx={{ marginX: 'auto', mt: '30px' }}
			alignItems={'center'}
		>
			<Typography variant='h5' fontWeight={500} fontSize='24px' mb={'30px'}>
				Category
			</Typography>

			<Grid container spacing={2}>
				{categories.map(({ discount, label, textButton, img }) => (
					<Grid item xs={12} sm={6} key={img}>
						<Box
							sx={{
								width: '100%',
								height: '340px',
								backgroundImage: `url(${img})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								display: 'flex',
								alignItems: 'flex-start',
								p: 2,
								color: 'white',
								borderRadius: '8px',
							}}
						>
							<Box sx={{ marginTop: '30px', marginLeft: '30px' }}>
								<Typography variant='h6' fontSize='16px'>
									Up to {discount}% Discount
								</Typography>
								<Typography variant='h6' fontSize='24px'>
									{label}
								</Typography>
								<Button
									sx={{
										mt: '20px',
										backgroundColor: '#092B42',
										color: 'white',
									}}
									variant='contained'
								>
									{textButton}
								</Button>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};
export default Category;
