import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'HuyN - Full-Stack Developer',
	description: "HuyN's portfolio website",
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
			<SpeedInsights />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
