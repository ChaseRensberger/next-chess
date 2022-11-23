'use client';
import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({ children }) {
	return (
		<html>
			<head></head>
			<body>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
