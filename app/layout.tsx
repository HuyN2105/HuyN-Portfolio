import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'HuyN - Full-Stack developer',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<link
				rel='icon'
				href='./assets/Images/icon.png'
				type='image/<generated>'
				sizes='<generated>'
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
