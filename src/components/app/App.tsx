import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Checkout, MainNavbar, Navbar, Footer, Home } from '../';
import { Box, Stack } from '@mui/material';
import { CardItem } from 'src/interfaces/cart.interface';
import { Products } from 'src/interfaces/product.interface';
const App = () => {
	const location = useLocation();
	const cartJson = localStorage.getItem('cart_data');
	const current_cart: any[] = cartJson ? JSON.parse(cartJson) : [];
	const [cardItems, setCardItems] = useState<CardItem[]>(current_cart);
	console.log(current_cart);

	//HANDLERS
	const onAdd = (product: Products) => {
		const exist: CardItem | undefined = cardItems.find(
			(item: CardItem) => item.id === product.id
		);
		if (exist) {
			const cart_updated = cardItems.map((item: CardItem) =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		} else {
			const new_item: CardItem = {
				id: product.id,
				quantity: 1,
				name: product.model,
				price: product.price,
				image: product.img,
			};
			const cart_updated = [...cardItems, { ...new_item }];
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		}
	};

	const onRemove = (item: Products) => {
		const item_data: any = cardItems.find(
			(ele: CardItem) => ele.id === item.id
		);
		if (item_data?.quantity === 1) {
			const cart_updated = cardItems.filter(
				(ele: CardItem) => ele.id !== item.id
			);
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		} else {
			const cart_updated = cardItems.map((ele: CardItem) =>
				ele.id === item.id
					? { ...item_data, quantity: item_data.quantity - 1 }
					: ele
			);
			setCardItems(cart_updated);
			localStorage.setItem('cart_data', JSON.stringify(cart_updated));
		}
	};

const onDelete = (item: CardItem) => {
	const cart_updated = cardItems.filter((ele: CardItem) => ele.id !== item.id);
	setCardItems(cart_updated);
	localStorage.setItem('cart_data', JSON.stringify(cart_updated));
};
	const onDeleteAll = () => {
		setCardItems([]);
		localStorage.removeItem('cart_data');
	};
	return (
		<Stack minHeight='100vh'>
			
			{location.pathname === '/' ? (
				<MainNavbar cartItems={cardItems} />
			) : (
				<Navbar cartItems={cardItems} />
			)}

			<Box flex={1}>
				<Routes>
					<Route path='/' element={<Home onAdd={onAdd} />} />
					<Route
						path='/checkout'
						element={
							<Checkout
								onAdd={onAdd}
								cartItems={cardItems}
								onDelete={onDelete}
								onRemove={onRemove}
								onDeleteAll={onDeleteAll}
							/>
						}
					/>
				</Routes>
			</Box>

		
			<Footer />
		</Stack>
	);
};

export default App;
