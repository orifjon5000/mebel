import * as React from 'react';
import { products } from 'src/config/data';
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material';

const Product = ({ type, onAdd }) => {
	return (
		<Grid container spacing={2} mt='10px' boxSizing='border-box' marginX='auto'>
			{products
				.filter(product => product.type === type)
				.map(item => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={item.model} mb='16px'>
						<Card sx={{ maxWidth: 300, height: 400, boxShadow: 3 }}>
							<CardActionArea>
								<CardMedia
									component='img'
									sx={{
										height: 220,
										objectFit: 'contain',
										objectPosition: 'center',
									}}
									image={item.img}
									alt={item.model}
								/>
							</CardActionArea>
							<CardContent
								sx={{
									cursor: 'pointer',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									flexDirection: 'column',
								}}
							>
								<Typography gutterBottom variant='h5' fontSize='20px'>
									{item.model}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Price: {item.price}$
								</Typography>
								<Button
									onClick={() => onAdd(item)}
									variant='contained'
									sx={{
										mt: 1,
										width: 200,
										height: 40,
										fontSize: '16px',
										backgroundColor: '#527A9A',
										color: 'white',
										'&:hover': {
											backgroundColor: '#40607A',
										},
										borderRadius: '4px',
									}}
								>
									Add to Cart
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
		</Grid>
	);
};

export default Product;
