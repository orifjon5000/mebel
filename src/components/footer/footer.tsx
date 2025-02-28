import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
	return (
		<Stack
			direction={'row'}
			justifyContent={'space-around'}
			alignItems={'center'}
			width={'100%'}
			height={'240px'}
			sx={{ backgroundColor: '#527A9A69', p: 3 }}
		>
			<TextArea title='Company' text1='About Us' text2='Blog' text3='Career' />
			<TextArea
				title='Contact'
				text1='Address: Mohammadpur, Dhaka'
				text2='Phone: ++88012345678976'
				text3='Email: info@shop.com'
			/>
			<TextArea
				title='Important Links'
				text1='Shop'
				text2='Privacy Policy'
				text3='Terms & Conditions'
			/>
			<TextArea
				title='Follow Us'
				text1='Facebook'
				text2='Instagram'
				text3='YouTube'
			/>

			
		</Stack>
	);
};

export default Footer;

const TextArea = ({ title, text1, text2, text3 }) => {
	return (
		<Stack
			display={'flex'}
			flexDirection={'column'}
			alignItems={'flex-start'}
			
		>
			<Typography  fontSize={'24px'} fontWeight={'bold'}>
				{title}
			</Typography>
			<Typography fontSize={'20px'} fontWeight={300}>
				{text1}
			</Typography>
			<Typography fontSize={'20px'} fontWeight={300}>
				{text2}
			</Typography>
			<Typography fontSize={'20px'} fontWeight={300}>
				{text3}
			</Typography>
		</Stack>
	);
};
